import { deleteModel } from "@/api/deleteModel";
import { PlayerInterface } from "@/pages/Game";
import { setRefresh } from "@/redux/reducers/forms/teamForm";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, HTMLAttributes, ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button";

interface TableInterface extends HTMLAttributes<HTMLTableElement> {
  headers?: String[];
  data?: any[];
  fields?: any[];
  handleEdit?: Function;
  model?: string,
  onRefresh?: Function,
}

const Table: React.FC<TableInterface> = ({ headers = [], data = [], handleEdit, fields = [], model = '', onRefresh = () => null, ...props }) => {

  const [td, setTd] = useState(data)
  const dispatch = useDispatch()

    const handleEditFinish = (event: React.FocusEvent<HTMLTableDataCellElement>, fieldName: string, index: number) => {
        if(handleEdit) handleEdit(event, fieldName, index)
    }

    const handleDelete = (_id: string) => {
      deleteModel(_id, model)
      dispatch(onRefresh({value: true}))
    }

    useEffect(() => {
      if(data!==td) setTd(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

  return (
    <div className="flex items-center justify-center my-4">
      <table {...props}
        className={`min-w-full border border-slate-200
                        dark:border-slate-800 rounded-lg shadow-sm dark:shadow-slate-800`}
      >
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="h-full overflow-auto">
          {Array.isArray(td) && td.map((item, index) => (
            <tr className="text-center" key={index}>
                <td>
                  <FontAwesomeIcon className="hover:text-red-500 cursor-pointer" onClick={() => handleDelete(item._id)} icon={faRemove} />
                </td>
                {fields.map((field, i) => (
                  i !== 0 && 
                  <td key={i} onBlur={(event) => handleEditFinish(event, field, index)} contentEditable>{item[field]}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

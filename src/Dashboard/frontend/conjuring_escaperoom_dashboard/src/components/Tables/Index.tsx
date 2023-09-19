import { deleteModel } from "@/api/deleteModel";
import { PlayerInterface } from "@/pages/Game";
import { setRefresh } from "@/redux/reducers/forms/teamForm";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, HTMLAttributes, ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button";

interface TableInterface extends HTMLAttributes<HTMLTableElement> {
  headers?: String[];
  data?: PlayerInterface[];
  handleEdit?: Function;
}

const Table: React.FC<TableInterface> = ({ headers = [], data = [], handleEdit, ...props }) => {

  const dispatch = useDispatch()

    const handleEditFinish = (event: React.FocusEvent<HTMLTableDataCellElement>, fieldName: string, index: number) => {
        if(handleEdit) handleEdit(event, fieldName, index)
    }

    const handleDelete = (_id: string) => {
      deleteModel(_id, 'game/player')
      dispatch(setRefresh({value: true}))

    }

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
          {Array.isArray(data) && data.map((item, index) => (
            <tr className="text-center" key={index}>
                <td>
                  <FontAwesomeIcon className="hover:text-red-500 cursor-pointer" onClick={() => handleDelete(item._id)} icon={faRemove} />
                </td>
                <td onBlur={(event) => handleEditFinish(event, 'firstName', index)} contentEditable>{item.firstName}</td>
                <td onBlur={(event) => handleEditFinish(event, 'lastName', index)} contentEditable>{item.lastName}</td>
                <td onBlur={(event) => handleEditFinish(event, 'phoneNumber', index)} contentEditable>{item.phoneNumber}</td>
                <td onBlur={(event) => handleEditFinish(event, 'age', index)} contentEditable>{item.age}</td>
                <td onBlur={(event) => handleEditFinish(event, 'name', index)} contentEditable>{item.name}</td>
                <td onBlur={(event) => handleEditFinish(event, 'exprience', index)} contentEditable>{item.exprience}</td>
                <td onBlur={(event) => handleEditFinish(event, 'date', index)} contentEditable>{item.date}</td>
                <td onBlur={(event) => handleEditFinish(event, 'reference', index)} contentEditable>{item.reference}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import { HTMLAttributes, useCallback, useEffect, useState } from "react";
import TagReader from "./TagReader";
import Cardbox from "../Card/Cardbox";
import { fetchInitialState } from "@/api/initiateRedux";
import { RootState } from "@/redux";
import { useDispatch, useSelector } from "react-redux";
import { initiateReader, initiateTag, setRefresh, setTag, tagInterface } from "@/redux/reducers/tag";
import Table from "../Tables/Index";
import { updateModel } from "@/api/updateModel";

interface TagFinderInterface extends HTMLAttributes<HTMLDivElement> {}

const TagFinder: React.FC<TagFinderInterface> = ({ className, ...props }) => {

  const data = useSelector((state: RootState) => state.tag.tags);
  const refresh = useSelector((state: RootState) => state.tag.refresh);
  const headers = ['', 'نام', 'کد شناسایی', 'دستور',]
  const fields = ['', 'name', 'UUID', 'command',]


  const dispatch = useDispatch()

  const handleEditFinish = (
    event: React.FocusEvent<HTMLTableDataCellElement>,
    fieldName: string,
    index: number
  ) => {
    const newVal = {...data[index]}
    newVal[fieldName] = event.target.innerHTML
    dispatch(setTag({value: newVal, index: index}))
  };

  const fetchData = useCallback(
    async (initialFunc: Function, model: string) => {
      try {
        const data = await fetchInitialState(model);
        if (data !== null) {
          initialFunc(data);
        } else {
          // Handle the case when data is null, e.g., show an error message
        }
      } catch (error) {
        console.error("Error fetching initial state:", error);
        // Handle the error, e.g., show an error message
      }
    },
    []
  );

  const initiateReaderFunc = (data: Object) => {
    dispatch(initiateReader({value: data}))
  }

  const initiatetagsFunc = (data: Object[]) => {
    dispatch(initiateTag({value: data}))
  }

  useEffect(() => {
    fetchData(initiateReaderFunc, 'reader')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (refresh) {
      fetchData(initiatetagsFunc, 'tag');
      dispatch(setRefresh({value: false}))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  const defaultClassName = `h-full w-full overflow-auto border rounded-lg shadow-sm border-slate-200 dark:border-slate-800`;

  return (
    <div className={`${defaultClassName} ${className}`} {...props}>
      <TagReader />
      <div>
        <Table dir='rtl' headers={headers} data={data} handleEdit={handleEditFinish} fields={fields} onRefresh={setRefresh} model="tag"/>
      </div>
    </div>
  );
};

export default TagFinder;

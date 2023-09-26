import { fetchInitialState } from "@/api/initiateRedux";
import Relay from "@/components/RelayFinder/Index";
import Table from "@/components/Tables/Index";
import { RootState } from "@/redux";
import { initiateRelay, setRefresh } from "@/redux/reducers/relay";
import { setRelay } from "@/redux/reducers/relay";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const RelayPage = () => {

    const data = useSelector((state: RootState) => state.relay.relays)
    const headers = ['', 'نام', 'آدرس', 'تعداد',]
    const refresh = useSelector((state: RootState) => state.relay.refresh)
    const fields = ['', 'name', 'ip', 'counter']

    const dispatch = useDispatch()

    const handleEditFinish = (
        event: React.FocusEvent<HTMLTableDataCellElement>,
        fieldName: string,
        index: number
      ) => {
        const newVal = {...data[index]}
        newVal[fieldName] = event.target.innerHTML
        dispatch(setRelay({value: newVal, index: index}))
      };

    const setRelayFunc = (data: Object[]) => {
        dispatch(initiateRelay({value: data}))
    }

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

    useEffect(() => {
    if (refresh) {
      fetchData(setRelayFunc, "relay");
      dispatch(setRefresh({ value: false }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

    return (
        <div className="h-[95%] w-full border border-slate-300 dark:border-slate-800 p-4 rounded-xl ">
            <Relay />
            <Table data={data} handleEdit={handleEditFinish} headers={headers} fields={fields} onRefresh={setRefresh} model="relay"  dir="rtl"/>
        </div>
    )
}

export default RelayPage;
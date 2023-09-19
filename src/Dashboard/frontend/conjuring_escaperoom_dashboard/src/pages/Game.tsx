import { fetchInitialState } from "@/api/initiateRedux";
import { updateModel } from "@/api/updateModel";
import Button from "@/components/Button/Button";
import { TeamCard } from "@/components/Cards/TeamCard";
import Divider from "@/components/Divider";
import { GameForm } from "@/components/Forms/GameForm";
import Table from "@/components/Tables/Index";
import { RootState } from "@/redux";
import { setRefresh } from "@/redux/reducers/forms/teamForm";
import { Key, useCallback, useEffect, useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";
import { useDispatch, useSelector } from "react-redux";

export interface PlayerInterface {
  [key: string]: string;
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  age: string;
  name: string;
  exprience: string;
  date: string;
  reference: string;
}

interface GameInterface {}

const Game: React.FC<GameInterface> = ({}) => {
  const refresh = useSelector((state: RootState) => state.teamForm.refresh);
  const [selectedDay, setSelectedDay] = useState(null);
  const [playersList, setPlayersList] = useState<PlayerInterface[]>();

  const dispatch = useDispatch();

  const headers = [
    "",
    "نام",
    "نام خانوادگی",
    "شماره تماس",
    "سن",
    "نام تیم",
    "تعداد تجربه",
    "تاریخ",
    "معرف",
  ];
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
      fetchData(setPlayersList, "game/player");
      dispatch(setRefresh({ value: false }));
    }
  }, [refresh]);

  const handleEditFinish = (
    event: React.FocusEvent<HTMLTableDataCellElement>,
    fieldName: string,
    index: number
  ) => {

    if (playersList) {
      const newPlayerList = [...playersList];
      newPlayerList[index][fieldName] = event.target.innerHTML;
      setPlayersList(newPlayerList);
      updateModel(
        newPlayerList[index]._id,
        newPlayerList[index],
        "game/player"
      );
    }
  };

  return (
    <div
      className={`w-full h-[95%] border border-slate-200 dark:border-slate-800 p-4 rounded-lg shadow-sm overflow-auto`}
    >
      <div className="my-4">
        <h3 className="text-center">اطلاعات تیم</h3>
        <Divider />
        <TeamCard />
      </div>
      <GameForm />
      <Table
        dir="rtl"
        handleEdit={handleEditFinish}
        headers={headers}
        data={playersList}
      />
    </div>
  );
};

export default Game;

import { TeamForm } from "../Forms/TeamForm"
import { setCounter, setCounterActive } from "@/redux/reducers/forms/teamForm"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux"
import Button from "../Button"

export const TeamCard = () => {

    const dispatch = useDispatch()
    const count = useSelector((state: RootState) => state.teamForm.counter)
    const counterActive = useSelector((state: RootState) => state.teamForm.counterActive)
    let teamCount = count

    const handleTeamCounterSubmit = () => {
        dispatch(setCounter(teamCount))
        dispatch(setCounterActive(false))
    }

    // TODO: Min and Max add and validation proccess

    return (
        <>
            {counterActive && <div dir="rtl" className="flex flex-row items-center justify-center ">
                <input placeholder="تعداد اعضا تیم" type="text"
                    className={`     rounded 
                                    focus:border focus:border-teal-300 focus:bg-transparent
                                    bg-slate-100 dark:bg-slate-800 py-2 px-2 text-blue-600
                                    border border-gray-800  w-60
                                    focus:animate-bounce focus:duration-1000 focus:ease-in`}
                    onChange={(e) => teamCount = Number(e.target.value)} />
                <button
                    className="bg-slate-100 dark:bg-slate-800 rounded border mx-2 px-4 py-2 border-slate-700 dark:shadow-slate-800 shadow-sm hover:shadow-lg hover:bg-transparent"
                    onClick={handleTeamCounterSubmit}>
                    تایید
                </button>
            </div>}
            {!counterActive && 
                <TeamForm />
            }
        </>
    )
}
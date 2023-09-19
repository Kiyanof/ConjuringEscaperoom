import { useDispatch, useSelector } from "react-redux";
import { RootState } from '@/redux';
import { setCalendarDay } from '@/redux/reducers/forms/gameForm';
import { Calendar } from "react-modern-calendar-datepicker";
import Button from "../Button";
import { ChangeEvent, useState } from "react";
import { publishTeam, setTeamState } from "@/redux/reducers/forms/playerForm";
import { setRefresh } from "@/redux/reducers/forms/teamForm";

export const GameForm = () => {

    const [team, setTeam] = useState({
        name: '',
        exprience: '',
        date: '',
        reference: '',
    })
    const date = useSelector((state: RootState) => state.gameForm.calendar.date);
    const refOptions = useSelector((state: RootState) => state.gameForm.options);
    const dispatch = useDispatch();

    const handleDayChange = (date: any) => {
        dispatch(setCalendarDay(date));
        const newTeam = {...team}
        newTeam.date = date.year + '-' + date.month + '-' + date.day
        setTeam(newTeam)
    };

    const handleNameChange = (input: string) => {
        const newTeam = {...team}
        newTeam.name = input
        setTeam(newTeam)
    }

    const handleExprinceChange = (input: string) => {
        const newTeam = {...team}
        newTeam.exprience = input
        setTeam(newTeam)
    }

    const handleReferenceChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newTeam = {...team}
        newTeam.reference = event.target.value
        setTeam(newTeam)
    }

    const submitTeam = () => {
        
        dispatch(setTeamState({value: team}))
        dispatch(publishTeam())
        dispatch(setRefresh({value: true}))
    }

    const fields = [
        { title: "نام تیم", type: "text", id: "tName", onBlur: (event: ChangeEvent<HTMLInputElement>) => handleNameChange(event.target.value) },
        { title: "تعداد تجربه", type: "text", id: "exprienceCounter", onBlur: (event: ChangeEvent<HTMLInputElement>) => handleExprinceChange(event.target.value) },
    ]

    return (
        <div className="flex flex-row lg:justify-between justify-center flex-wrap items-center gap-4">
            <div className='flex flex-col gap-2 order-3' dir="rtl">
                {fields.map((field, index) => (
                    field.id != 'ref' && <input onBlur={(e) => field.onBlur(e)} key={index} placeholder={field.title} type={field.type}
                        className={`focus:animate-bounce focus:duration-1000 focus:ease-in-out focus:border focus:outline-none focus:bg-transparent
                                        bg-slate-100 dark:bg-slate-800 rounded shadow-sm py-2 px-4 w-64
                                        border border-gray-800`}

                    />
                ))}
                <select onChange={(e) => handleReferenceChange(e)} id="countries" className="focus:animate-bounce focus:duration-1000 focus:ease-in-out focus:border focus:border-blue-500 focus:bg-transparent
                                        bg-slate-100 dark:bg-slate-800 rounded shadow-sm py-2 px-4
                                        border border-gray-800">
                    {refOptions.map((option, index) => (
                        <option key={index} className='dastnevis'>{option}</option>
                    ))}
                </select>
                <Button
                    onClick={() => submitTeam()}
                    className="mt-5 round w-3/4 mx-auto border border-slate-200 dark:border-slate-800 shadow-md p-3 hover:shadow-lg hover:bg-transparent"
                >
                    تایید
                </Button>
            </div>

            <div className='flex flex-row'>
                <div>
                    <Calendar
                        calendarClassName="dark:bg-slate-600 bg-slate-100"
                        value={date}
                        onChange={handleDayChange}
                        locale={'fa'}
                        shouldHighlightWeekends
                    />
                </div>

            </div>
        </div>
    )
}
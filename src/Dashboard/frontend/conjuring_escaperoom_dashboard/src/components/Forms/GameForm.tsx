import { useDispatch, useSelector } from "react-redux";
import { RootState } from '@/redux';
import { setCalendarDay, setTime } from '@/redux/reducers/forms/gameForm';
import { Calendar } from "react-modern-calendar-datepicker";
import Button from "../Button";

export const GameForm = () => {

    const time = useSelector((state: RootState) => state.gameForm.time);
    const date = useSelector((state: RootState) => state.gameForm.calendar.date);
    const refOptions = useSelector((state: RootState) => state.gameForm.options);
    const dispatch = useDispatch();

    const handleDayChange = (date: any) => {
        dispatch(setCalendarDay(date));
    };

    const fields = [
        { title: "نام تیم", type: "text", id: "tName" },
        { title: "تعداد تجربه", type: "text", id: "exprienceCounter" },
    ]

    return (
        <div className="flex flex-row lg:justify-between justify-center flex-wrap items-center gap-4">
            <div className='flex flex-col gap-2 order-3' dir="rtl">
                {fields.map((field, index) => (
                    field.id != 'ref' && <input key={index} placeholder={field.title} type={field.type}
                        className={`focus:animate-bounce focus:duration-1000 focus:ease-in-out focus:border focus:outline-none focus:bg-transparent
                                        bg-slate-100 dark:bg-slate-800 rounded shadow-sm py-2 px-4 w-64
                                        border border-gray-800`}

                    />
                ))}
                <select id="countries" className="focus:animate-bounce focus:duration-1000 focus:ease-in-out focus:border focus:border-blue-500 focus:bg-transparent
                                        bg-slate-100 dark:bg-slate-800 rounded shadow-sm py-2 px-4
                                        border border-gray-800">
                    {refOptions.map((option, index) => (
                        <option key={index} className='dastnevis'>{option}</option>
                    ))}
                </select>
                <Button
                    className="mt-5 round w-3/4 mx-auto border border-slate-200 dark:border-slate-800 shadow-md p-3 hover:shadow-lg hover:bg-transparent"
                >
                    تایید
                </Button>
            </div>

            <div className='flex flex-row'>
                <div>
                    <Calendar
                        calendarClassName="dark:bg-slate-600"
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
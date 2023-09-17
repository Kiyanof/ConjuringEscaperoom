import Button from "@/components/Button/Button"
import { TeamCard } from "@/components/Cards/TeamCard"
import Divider from "@/components/Divider"
import { GameForm } from "@/components/Forms/GameForm"
import { useState } from "react"
import { Calendar } from "react-modern-calendar-datepicker"

interface GameInterface {

}

const Game: React.FC<GameInterface> = ({}) => {

    const [selectedDay, setSelectedDay] = useState(null);

    return (
        <div className={`w-full h-[95%] border border-slate-200 dark:border-slate-800 p-4 rounded-lg shadow-sm overflow-auto`}>
            <div className="my-4">
                <h3 className="text-center">اطلاعات تیم</h3>
                <Divider />
                <TeamCard />
            </div>
            <GameForm />
        </div>  
    )
}

export default Game
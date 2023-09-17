import { RootState } from "@/redux"
import { PlayerForm } from "./PlayerForm"
import { useSelector } from "react-redux"

export const TeamForm =  () => {

    const count = useSelector((state: RootState) => state.teamForm.counter)
    const inputs = Array.from({length: count}, (_, i) => {
                    
        return <PlayerForm  key={i} counter={i} />
    })

    return (
        <div dir="rtl" className="container-fluid overflow-scroll p-3 max-h-[14rem] shadow-sm rounded">
            {inputs}
        </div>
    )
}
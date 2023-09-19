import { RootState } from "@/redux"
import { PlayerForm } from "./PlayerForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { pushPlayer } from "@/redux/reducers/forms/playerForm"

export interface player {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    age: string,
}

export const TeamForm =  () => {

    const count = useSelector((state: RootState) => state.teamForm.counter)
    const dispatch = useDispatch()
    const [players, setPlayers] = useState<player[]>(Array.from({length: count}, (_, k) => {
        return {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            age: '',
        }
    }))

    useEffect(() => {
        dispatch(pushPlayer(players))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addPlayer = (player: player, index: number) => {
        const newPlayers = [...players]
        newPlayers[index] = player
        setPlayers(newPlayers)
        dispatch(pushPlayer({value: newPlayers}))
    }

    const inputs = Array.from({length: count}, (_, i) => {
        
        return <PlayerForm addPlayer={(player: player) => addPlayer(player, i)}  key={i} counter={i} />
    })

    

    return (
        <div dir="rtl" className="container-fluid overflow-scroll p-3 max-h-[14rem] shadow-sm rounded">
            {inputs}
        </div>
    )
}
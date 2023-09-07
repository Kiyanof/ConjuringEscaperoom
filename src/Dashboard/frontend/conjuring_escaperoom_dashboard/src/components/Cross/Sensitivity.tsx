import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, faCheck, faWarning } from "@fortawesome/free-solid-svg-icons"
import Switch from "../Form/SwitchButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Divider from "../Divider";
import Button from "../Button";
import { RootState } from "@/redux";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo, useState } from "react";
import { setCross } from "@/redux/reducers/cross";


interface SensitivityInterface {
    crossIndex?: number;
}
const Sensitivity: React.FC<SensitivityInterface> = ({crossIndex = 0}) => {
    
    const length = useSelector((state: RootState) => state.cross.cross.length)
    const cross = useSelector((state: RootState) => state.cross.cross[crossIndex])
    const [sensitiveCross, setSensitiveCross] = useState(cross.SensitiveCross)
    const dispatch = useDispatch()
    
    let counter = 0

    const icons = useMemo(() => {
        return [fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, fa0,]
    }, [])

    const toggleCross = (index: number) => {
        const newCross = [...sensitiveCross]
        newCross[index] = !newCross[index]
        setSensitiveCross(newCross)
    }

    const submitCross = () => {
        const newCrossInformation = {...cross}
        newCrossInformation.SensitiveCross = sensitiveCross
        dispatch(setCross({index: crossIndex, value: newCrossInformation}))
    }

    return (
        <div>
            <div className={`grid grid-cols-2 gap-3`}> 
                {Array.from({length: length}, (v, k) => {
                    let isSame = false
                    if(crossIndex === k) {
                        isSame = true
                        counter++
                    }
                    return <Switch onClick={() => toggleCross(k)} checked={cross.SensitiveCross[k] || isSame} disabled={isSame} icon={isSame ? faWarning : icons[counter++]} color={isSame ? 'danger' : 'success'}   key={k}  className=""/>
                })}
            </div>
            <Divider  className="mt-6"/>
            <div className=" flex-col flex ">
                <FontAwesomeIcon
                    onClick={() => submitCross()}
                    className="font-medium text-xl border  border-slate-300 py-2 px-2 rounded-full cursor-pointer  hover:shadow-lg  transition-all duration-200 ease-in-out dark:shadow-slate-700 dark:border-slate-800"
                    icon={faCheck}
                />
            </div>
        </div>
    )
}

export default Sensitivity
import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, faCheck, faWarning } from "@fortawesome/free-solid-svg-icons"
import Switch from "../Form/SwitchButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Divider from "../Divider";
import Button from "../Button";


interface RelaysInterface {
    crossIndex?: number;
}
const Relays: React.FC<RelaysInterface> = ({crossIndex = 0}) => {

    let counter = 0
    const icons = [
        fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, fa0,
    ]

    return (
        <div>
            <div className={`grid grid-cols-2 gap-3`}> 
                {Array.from({length: 10}, (v, k) => {
                    let isSame = false
                    if(crossIndex === k) {
                        isSame = true
                        counter++
                    }
                    return <Switch checked={isSame} disabled={isSame} icon={isSame ? faWarning : icons[counter++]} color={isSame ? 'danger' : 'success'}   key={k}  className=""/>
                })}
            </div>
            <Divider  className="mt-6"/>
            <div className=" flex-col flex ">
                <FontAwesomeIcon
                    className="font-medium text-xl border  border-slate-300 py-2 px-2 rounded-full cursor-pointer  hover:shadow-lg  transition-all duration-200 ease-in-out dark:shadow-slate-700 dark:border-slate-800"
                    icon={faCheck}
                />
            </div>
        </div>
    )
}

export default Relays
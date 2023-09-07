import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Information from "./Information"
import { faListNumeric, faUserInjured } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import { RootState } from "@/redux"
import { useEffect } from "react"
import { crossInterface } from "@/redux/reducers/cross"

interface DeviceInfoInterface {
    crossIndex?: number,
}

const DeviceInfo: React.FC<DeviceInfoInterface> = ({crossIndex = 0}) => {

    const isVisible = useSelector((state: RootState) => state.cross.toolbarViews[7].visible)
    const cross = useSelector((state: RootState) => state.cross.cross[crossIndex])

    return (
        <div className={`${isVisible ? 'block' : 'hidden'} w-full h-[48px] rounded-lg bg-slate-200 dark:bg-slate-800 `}>
            <div dir="rtl" className="flex flex-row justify-between items-center gap-2 h-full px-2">
                <div dir="ltr">
                    <Information battery={4} rssi={-90}/>
                </div>
                <div>
                    <span className="inline-flex"><h5>صلیب</h5>: <span className="pr-2 tracking-widest">{crossIndex + 1}</span></span>
                </div>
                <div>
                    <span className="inline-flex"><h5>آدرس</h5>: <span className="pr-2 tracking-widest">{cross?.ip}</span></span>
                </div>
                <div>
                    <span className="inline-flex"><h5>وضعیت</h5>: <span className="pr-2 tracking-widest">{cross?.active ? 'فعال' : 'غیرفعال'}</span></span>
                </div>
                <div>
                    <span className="inline-flex mt-2"><FontAwesomeIcon icon={faUserInjured}/><span className="pr-2 tracking-widest">{cross?.injured}</span></span>
                </div>
                <div>
                    <span className="inline-flex mt-2"><FontAwesomeIcon icon={faListNumeric}/><span className="pr-2 tracking-widest">{cross?.score}</span></span>
                </div>
            </div>
        </div>
    )
}

export default DeviceInfo
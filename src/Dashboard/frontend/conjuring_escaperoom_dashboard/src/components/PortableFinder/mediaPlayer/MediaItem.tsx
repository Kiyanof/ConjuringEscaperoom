import Image from "next/image"
import { HTMLAttributes, useEffect, useState } from "react"
import musicLogo from "@/../public/music.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faCircle, faDownload, faRemove } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import { setRefresh } from "@/redux/reducers/goblinFinder"
interface MediaItemInterface extends HTMLAttributes<HTMLDivElement> {
    name: string,
    onclick?: Function,
    active?: boolean,
}

const MediaItem: React.FC<MediaItemInterface> = ({name, className, active = false, onclick, ...props}) => {

    const [activeState, setActiveState] = useState(active)
    const dispatch = useDispatch()
    const handleClick = () => {
        if(onclick) onclick()
    }

    const handleRefresh = (state: boolean) => {
        dispatch(setRefresh({value: state}))
    }


    const deleteItem  = async () => {
        try {
            const URL = `http://localhost:8000/goblinFinder/remove/${name}`
            const response = await fetch(URL);
            if (response.ok) {
                const res = await response.json();
                handleRefresh(true)
              } else {
                console.log("Error while deleting Explorer item file")
              }
        } catch (error) {
            console.log("Error while deleting Explorer item file")
        }
    }

    const defaultClassName = `w-full h-[60px] bg-transparent hover:bg-slate-200
                                 dark:bg-slate-800 flex flex-row items-center justify-between
                                 transition-all duration-200 ease-in cursor-pointer rounded-md
                                  my-[1px] p-2 gap-4
                                 `

    useEffect(() => {
        setActiveState(active)
    }, [active])

    

    return (
        <div className={`${defaultClassName} ${className}`}{...props} onClick={handleClick}>
            <div className={`flex flex-row items-center gap-4`}>
                <FontAwesomeIcon onClick={deleteItem} className="hover:text-red-500" icon={faRemove} />
                <Image src={musicLogo} alt="Music Logo" width={30}/>
                <h5 className="text-sm font-thin">{name}</h5>
            </div>
            <div className={`flex flex-row items-center gap-4`}>
                <FontAwesomeIcon className={` text-blue-500 hover:text-blue-600 `} icon={faDownload} />
                <FontAwesomeIcon className={` text-blue-500 hover:text-blue-600 `}  icon={activeState ? faCheckCircle : faCircle} />
            </div>
        </div>
    )
}

export default MediaItem
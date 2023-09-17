import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../Button/Button"
import { faDashboard, faList, faPause, faPlay, faStepBackward, faStepForward, faVolumeControlPhone, faVolumeDown, faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons"
import Range from "../Form/Range"
import { ChangeEvent, MouseEventHandler, Ref, RefObject, useCallback, useEffect, useState } from "react"
import { MediaInterface, calcDuration } from "./Playlist"
import Steps from "../Navigation/Steps"
import { isMusicFile, isVideoFile } from "./Player"

interface MediaControlInterface {
    currentTime?:  number;
    item?: MediaInterface;
    playlistBtnOnClick?: MouseEventHandler<SVGSVGElement>; 
    mediaElement?: HTMLAudioElement | HTMLVideoElement | null; 
    handleRangeChange?: Function;
}

const MediaControl: React.FC<MediaControlInterface> = ({mediaElement, currentTime, handleRangeChange, playlistBtnOnClick, item, ...props}) => {

    const [time, setTime] = useState(calcDuration(currentTime ? currentTime : 0))
    const [volume, setVolume] = useState(50)
    const [volumeColor, setVolumeColor] = useState('success')
    const [volumeIcon, setVolumeIcon] = useState(faVolumeDown)
    const [isPlay, setIsPlay] = useState(false)

    useEffect(() => {
        if(item && mediaElement) mediaElement.src = item.src
    }, [item, mediaElement])
    
    useEffect(() => {
        if(currentTime){
            const newTime = calcDuration(currentTime)
            setTime(newTime)
        }        
    }, [currentTime])

    useEffect(() => {
        if(volume > 90) {
            setVolumeColor('danger')
            setVolumeIcon(faVolumeHigh)
        }
        else if(volume > 70 ) {
            setVolumeColor('warning')
            setVolumeIcon(faVolumeHigh)
        }
        else if(volume > 0) {
            setVolumeColor('success')
            setVolumeIcon(faVolumeDown)
        }
        else {
            setVolumeIcon(faVolumeMute)
        }
    }, [volume])

    const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = +e.target.value
        setVolume(newVolume)
        if(mediaElement) mediaElement.volume = newVolume/100;
    }, [mediaElement])

    const iconsStyle = `text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-200 cursor-pointer`

    const handleRange = (e: ChangeEvent<HTMLInputElement>) => {
        if(handleRangeChange){
            handleRangeChange(e.target.value)
        }
        else {

        }
    }

    const play = (state: boolean) => {
        if(state) mediaElement?.play()
        else mediaElement?.pause()
        setIsPlay(state)
    }

    const prev = () => {

    }

    const next = () => {

    }
    
    return (
        <div className="container">
            <div className="flex flex-col justify-center items-center gap-1">
                <div className="w-full">
                    <Range onChange={handleRange} min={0} max={item?.duration ? item.duration : 0} value={currentTime ? currentTime : 0} color="primary"/>
                </div>
                <div className="w-full px-2">
                    <span className="font-thin text-xs md:order-1 order-2">{item?.title}</span>
                </div>
                <div className="px-2 flex sm:flex-row flex-col  flex-wrap flex-shrink  justify-around items-center gap-x-2 gap-y-4 w-full">
                    <div className="grid grid-cols-2 gap-2 md:order-1 order-3">
                        <FontAwesomeIcon onClick={playlistBtnOnClick} className={`${iconsStyle}`} icon={faList} />
                        <FontAwesomeIcon className={`${iconsStyle}`} icon={faDashboard} />
                    </div>
                    <div className="flex flex-row justify-center flex-grow items-center gap-3 order-2">
                        <span className="font-thin text-sm md:order-1 order-2">{time}</span>
                        <div className="grid grid-cols-3 md:order-2 order-1">
                            <Button color="transparent">
                                <FontAwesomeIcon icon={faStepBackward} />
                            </Button>
                            <Button color="transparent" onClick={() => play(!isPlay)}>
                                <FontAwesomeIcon className="w-4 h-4" icon={!isPlay ? faPlay : faPause} />
                            </Button>
                            <Button color="transparent">
                                <FontAwesomeIcon icon={faStepForward} />
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-2 justify-end items-center md:order-3 order-1 md:w-fit w-full">
                        <FontAwesomeIcon className="w-4" icon={volumeIcon} />
                        <Range showValue min={0} max={100} value={50} color={volumeColor} onChange={handleVolumeChange}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaControl
import { HTMLAttributes, MutableRefObject, Ref, RefObject, useEffect, useRef, useState } from "react"
import Playlist, { MediaInterface } from "./Playlist";
import Card from "../Card/Card";
import Player, { isVideoFile } from "./Player";
import MediaControl from "./Control";

interface MediaPlayerInterface {
    playlist?: MediaInterface[];
    current?: string;
    autoplay?: boolean;
    controls?: boolean;
    loop?: boolean;
    muted?: boolean;
    volume?: number;
    onPlay?: Function;
    onPause?: Function;
    onEnded?: Function;
    onTimeUpdate?: Function;
}

const MediaPlayer: React.FC<MediaPlayerInterface> = ({controls = true, playlist = [], ...props}) => {

    const [src, setSrc] = useState('') 
    const [item, setItem] = useState<MediaInterface>()
    const [currentTime, setCurrentTime] = useState<number>()
    const [showPlaylist, setShowPlaylist] = useState(playlist ? true : false)
    const [mediaElement, setMediaElement] = useState<HTMLAudioElement | HTMLVideoElement | null>()
    const media = useRef<HTMLAudioElement | HTMLVideoElement | null>()


    const handleItem = (item: MediaInterface) => {
        setItem(item)
        setSrc(item.src)
        item.duration && setCurrentTime(item.duration)
        const current = media.current
        if(current){
            current.src = item.src
        }

    }

    const handlePlaylist = () => {
        if(playlist) setShowPlaylist(!showPlaylist)
    }

    const handleRangeChange = (inp: number) => {
        setCurrentTime(inp)
    }

    useEffect(() => {
        console.log(media.current?.volume)
    }, [media.current?.volume])

    useEffect(() => {
        const audioElement = document.createElement("audio");
        audioElement.controls = true;
        document.body.appendChild(audioElement);
        setMediaElement(audioElement)
    }, [])



    return (
        <Card className="w-full flex flex-col gap-4 flex-wrap flex-shrink justify-center items-center h-fit transition-height duration-300 ease-in-out">
            <div className="flex flex-col gap-4 justify-center items-center">
                <Player item={item} mediaElement={mediaElement}/>
                {controls && <MediaControl mediaElement={mediaElement} handleRangeChange={handleRangeChange} item={item} playlistBtnOnClick={handlePlaylist} currentTime={currentTime}/>}
            </div>
            <Playlist hidden={showPlaylist} onClick={handleItem}/>
        </Card>
    )
}

export default MediaPlayer
import { useEffect, useRef } from "react";
import { MediaInterface } from "./Playlist";

interface PlayerInterface {
    item? : MediaInterface;
    mediaElement?: HTMLVideoElement | HTMLAudioElement | null; 
}

export const isMusicFile = (fileName: string | null): boolean => {
    if(fileName){
        const musicFileExtensions = ['.mp3', '.wav', '.ogg', '.flac', '.aac', '.wma'];
        const fileExtension = fileName.slice(fileName.lastIndexOf('.'));  
        return musicFileExtensions.includes(fileExtension.toLowerCase());
    }
    return false;
}

export const isVideoFile = (fileName: string | null): boolean => {
    if(fileName){
        const videoFileExtensions = ['.mp4', '.avi', '.mov', '.mkv', '.wmv', '.flv', '.webm'];
        const fileExtension = fileName.slice(fileName.lastIndexOf('.'));
        return videoFileExtensions.includes(fileExtension.toLowerCase());
    }
    return false;
  }
  
  

const Player: React.FC<PlayerInterface> = ({item, mediaElement, ...props}) => {

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (mediaElement && isMusicFile(mediaElement.src)) {
            audioRef.current = mediaElement as HTMLAudioElement;
        } else if (mediaElement && isVideoFile(mediaElement.src)) {
            videoRef.current = mediaElement as HTMLVideoElement;
        }
    }, [mediaElement])

    return (
        <div className="bg-transparent border border-slate-200 dark:border-slate-800 p-0 m-2 rounded-xl">
            {item && 
                <>
                    {!isMusicFile(item.type ? item.type : '')  ? 
                        <audio ref={audioRef} src={item.src} /> :
                        isVideoFile(item.type ? item.type : '') ? <video ref={videoRef} src={item.src}/> : 
                                            <div className="flex flex-row justify-center items-center w-full h-full">
                                                <h6 className="text-danger-500">File Type is Wrong</h6>
                                            </div>
                }
                </>     
            }
        </div>
    )
}

export default Player
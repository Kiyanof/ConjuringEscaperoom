import { HTMLAttributes } from "react"
import MediaPlayer from "./mediaPlayer/Index"
import SignalSender from "./signal/signalFinder/Index"
import SignalMeter from "./signal/signalMeter/Index"


interface Index extends HTMLAttributes<HTMLDivElement> {

}

const Index: React.FC<Index> = ({className, ...props}) => {

    const defaultClassName = `flex sm:flex-row flex-col sm:justify-between justify-center w-full  items-cetner gap-2 p-4 h-full overflow-auto`
    return (
        <div className={`${defaultClassName} ${className}`} {...props}>
            <div className="sm:w-1/3 w-full  h-full">
                <SignalSender />
            </div>
            <div className="sm:w-1/3  w-full h-full">
                <div className="w-full h-full border rounded-lg shadow-sm">
                    <SignalMeter />
                </div>
            </div>
            <div className="sm:w-1/3 w-full h-full">
                <MediaPlayer />
            </div>
        </div>
    )
}

export default Index
import { HTMLAttributes } from "react"
import Explorer from "./Explorer"
import Image from "next/image"
import musicFolderImg from "@/../public/musicFolder.png"
import Control from "./Control"
import DragAndDropFileUpload from "@/components/DragDropFile"
import { useDispatch } from "react-redux"
import { setRefresh } from "@/redux/reducers/goblinFinder"
interface MediaPlayer extends HTMLAttributes<HTMLDivElement> {

}

const MediaPlayer: React.FC<MediaPlayer> = ({className, ...props}) => {

    const dispatch = useDispatch()

    const handleRefresh = (state: boolean) => {
        dispatch(setRefresh({value: state}))
    }

    const defaultClassName = `w-[full] h-full border rounded-lg shadow-sm dark:border-slate-800 dark:shadow-slate-600
                                flex flex-col justify-between`

    const handleUpload = async (files: FileList) => {
        try {
            const URL = `http://localhost:8000/goblinFinder/add`
            const formData = new FormData();
            for (let index = 0; index < files.length; index++) {
                formData.append('files', files[index])
            }
            const response = await fetch(URL, {
                'method': 'POST',
                'body': formData,
            })
            if (response.ok) {
                handleRefresh(true)
                console.log('Files uploaded successfully');
                // Handle success, e.g., show a success message
              } else {
                console.error('File upload failed');
                // Handle error, e.g., show an error message
              }
        } catch (error) {
            console.error('Error uploading files:', error);
            // Handle error, e.g., show an error message
        }
    }
    return (
        <div className={`${defaultClassName} ${className}`} {...props}>
            <div className="flex flex-row justify-between px-2 py-3 w-full border-b">
                <Image src={musicFolderImg} alt="MusicPlayer Logo" width={50} height={100}/>
                <h3 className="mt-4 text-md font-extralight">فایل های صوتی</h3>
            </div>
            <Explorer />
            <div>
                <DragAndDropFileUpload onFileUpload={handleUpload}/>
                <Control current="فایل 1"/>
            </div>
        </div>
    )
}

export default MediaPlayer
import { useEffect, useState } from "react"
import MediaItem from "./MediaItem"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux";
import { setRefresh } from "@/redux/reducers/goblinFinder";

interface ExplorerInterface {

}

const Explorer: React.FC<ExplorerInterface> = ({}) => {

    const [musicFiles, setMusicFiles] = useState([]);
    const refresh = useSelector((state: RootState) => state.goblin.refresh)

    const dispatch = useDispatch()

    const [items, setItems] = useState([
        {
            name: 'فایل 1',
            onclick: (index: number) => handleClick(index),
            active: false,
            src: ''
        }
        ,
        {
            name: 'فایل 2',
            onclick: (index: number) => handleClick(index),
            active: false,
            src: ''
        }
        ,
        {
            name: 'فایل 3',
            onclick: (index: number) => handleClick(index),
            active: false,
            src: ''
        }
        ,
    ])

    const handleRefresh = (state: boolean) => {
        dispatch(setRefresh({value: state}))
    }

    useEffect(() => {
        console.log(refresh)
        async function fetchMusicFiles() {
            try {
              const response = await fetch('http://localhost:8000/goblinFinder/musicFiles'); // Replace with your backend URL
              if (response.ok) {
                const files = await response.json();
                setMusicFiles(files.files);
              } else {
                throw new Error('Failed to fetch music files');
              }
            } catch (error) {
              console.error('Error fetching music files:', error);
            }
          }
      
            if(refresh){
                fetchMusicFiles();
                handleRefresh(false)
            }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh])

    useEffect(() => {
        
        let newItems = Array.from({length: musicFiles.length}, (value, index) => ({
            name: musicFiles[index],
            onclick: (index: number) => handleClick(index),
            active: false,
            src: ''
        }))

        setItems(newItems)
        console.log(musicFiles)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [musicFiles])

    const handleClick = (index: number) => {
        const newItems = [...items]
        for (let i = 0; i < newItems.length; i++) {
            if(i === index){
                newItems[i].active = true
            }
            else {
                newItems[i].active = false
            }
        }
        setItems(newItems)
    }

    

    

    return (
        <div dir="rtl" className="w-full h-full overflow-auto">
            {items.map((item, index) => (
                <MediaItem active={item.active} name={item.name} onclick={() => handleClick(index)} key={index}/>
            ))}
        </div>
    )
}

export default Explorer
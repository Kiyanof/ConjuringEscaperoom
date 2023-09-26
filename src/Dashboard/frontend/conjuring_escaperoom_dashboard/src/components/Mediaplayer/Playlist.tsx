import { StaticImageData } from "next/image";
import Card from "../Card/Card";
import Divider from "../Divider";
import ImageContainer from "../Image";
import List from "../List";
import musicImg from "@/../public/music.png";
import videoImg from "@/../public/video.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faDownload,
  faInfo,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { SetStateAction, useCallback, useEffect, useState } from "react";
import DragAndDropFileUpload from "../DragDropFile";
import jsmediatags from "jsmediatags";
import { PictureType } from "jsmediatags/types";
import { isVideoFile } from "./Player";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux";
import Button from "../Button";
import Input from "../Form/Input";
import { initiatePlaylist, pushPlaylist, setRefresh } from "@/redux/reducers/mediaplayer";
import { fetchInitialState } from "@/api/initiateRedux";

export interface MediaInterface {
  src: string;
  title: string;
  artist?: string;
  duration?: number;
  album?: string;
  coverImage?: string | StaticImageData;
  genre?: string;
  releaseDate?: string;
  size?: number;
  downloadable?: boolean;
  type?: string;
}

interface PlaylistInterface {
  items?: MediaInterface[];
  title?: string;
  onClick?: Function;
  hidden?: boolean;
}

const mediaData: MediaInterface[] = [
  
];

export const calcDuration = (duration: number) => {
  const hour = Math.floor(duration / 3600);
  const minute = Math.floor((duration % 3600) / 60);
  const second = duration % 60;

  return (
    (hour != 0 ? hour + ":" : "00:") +
    (minute != 0 ? (minute < 10 ? "0" + minute : minute) : "00") +
    ":" +
    (second < 10 ? "0" + second : second)
  );
};

const bytesToMegabytes = (bytes: number): number => {
  const megabytes = bytes / (1024 * 1024);
  return Number(megabytes.toFixed(2));
};

const shortenTitle = (title: string, maxChar: number): string => {
  if (title.length > maxChar) {
    return title.substring(0, maxChar) + "...";
  }
  return title;
};

const Playlist: React.FC<PlaylistInterface> = ({
  items = mediaData,
  title = "test",
  onClick,
  hidden = false,
  ...props
}) => {

  const [active, setActive] = useState(-1);
  const playlists = useSelector((state: RootState) => state.mediaplayer.playlists)
  const [playlistItems, setPlaylistItems] = useState<MediaInterface[]>(items);
  const [newPlaylist, setNewPlaylist] = useState('')
  const [activePlaylist, setActivePlaylist] = useState(playlists.length > 1 ? 1 : 0)


  const dispatch = useDispatch()
 

  const handleClick = (item: MediaInterface, index: number) => {
    onClick && onClick(item);
    setActive(index);
  };

  const [uploadedFiles, setUploadedFiles] = useState<FileList | undefined>();

  const handleFileUpload = useCallback(async (files: FileList) => {
    const newFiles = Array.from(files);
    setUploadedFiles(files);
    const newItems:MediaInterface[] = [];
    const formData = new FormData();
    newFiles.forEach((file) => {
      jsmediatags.read(file, {
        onSuccess: async (tag) => {
          const fileTag: MediaInterface = {
            src: URL.createObjectURL(file),
            title: file.name,
            artist: tag?.tags?.artist,
            duration: await getDuration(file),
            album: tag?.tags?.album, 
            coverImage: isVideoFile(file.name) ? videoImg : musicImg,
            genre: tag?.tags?.genre,
            releaseDate: tag?.tags?.year,
            size: file.size,
            downloadable: true,
            type: file.name.split(".")[file.name.split.length - 1],
          };
          newItems.push(fileTag);
        },
      });
      formData.append("files", file);
    });
    if(activePlaylist != 0){
      try {
        const response = await fetch(
          `http://localhost:8000/mediaplayer/${playlists[activePlaylist]}/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
      } catch (error) {
        console.error("Error uploading files:", error);
      }
      setPlaylistItems([...playlistItems, ...newItems]);
    }
    
  }, [activePlaylist, playlistItems]);

  const addPlaylist = () => {
      dispatch(pushPlaylist({value: newPlaylist}))
  }

  const removePlaylist = useCallback(() => {
    const response = fetch(`http://localhost:8000/mediaplayer/${playlists[activePlaylist]}/delete`, {
      method: 'DELETE'
    })
    setPlaylistItems([])
    dispatch(setRefresh({value: true}))
}, [activePlaylist, playlists])

const initiatePlaylistFunc = (result: Object[]) => {
    dispatch(initiatePlaylist({value: result}))
}

const getDuration = async (file: Blob) => {
  // Create a temporary audio element
  const audioElement = new Audio();
  audioElement.src = URL.createObjectURL(file);

  const durationPromise = new Promise<number>((resolve) => {
    audioElement.addEventListener('loadedmetadata', () => {
      // Access the duration property
      const duration = audioElement.duration;
      resolve(duration);
    });
  });

  // Wait for the duration to be resolved
  const duration = await durationPromise;

  // Remove the event listener and destroy the temporary audio element
  audioElement.removeEventListener('loadedmetadata', () => {});
  audioElement.src = '';

  return parseInt(duration.toString(), 10)
  
}

const fetchData = async (index: number) => {
  try {
    const response = await fetch(`http://localhost:8000/mediaplayer/${playlists[index]}/listMedia/`, {
      credentials: 'same-origin',
      method: 'GET'
    });
    const data = await response.json();

    // Use Promise.all() to await all async operations inside the map
    // Initialize newFiles outside of the loop
const newFiles: MediaInterface[] = [];

const medias = await Promise.all(data.result.map(async (item: any) => {
  const response = await fetch(`http://localhost:8000/mediaplayer/${playlists[index]}/media/${item.name}/get`);
  if (response.ok) {
    const file = await response.blob();

    // Wrap jsmediatags.read in a Promise to make it asynchronous
  const tag: any = await new Promise((resolve) => {
    jsmediatags.read(file, {
      onSuccess: (tag) => {
        resolve(tag);
      },
    });
  });
    
    const fileTag: MediaInterface = {
      src: URL.createObjectURL(file),
      title: item.name,
      artist: tag?.tags?.artist,
      duration: await getDuration(file),
      album: tag?.tags?.album,
      coverImage: isVideoFile(item.name) ? videoImg : musicImg,
      genre: tag?.tags?.genre,
      releaseDate: tag?.tags?.year,
      size: file.size,
      downloadable: true,
      type: item.name.split(".")[item.name.split.length - 1],
    };
    newFiles.push(fileTag);
  }
  return null; // Handle fetch errors or non-ok responses
}));

// Log the newFiles array outside of the loop
  setPlaylistItems(newFiles);
  } catch (error) {
    console.error(error);
  }
}


const handleActivePlaylist = (index: number) => {
    setActivePlaylist(index)
}

useEffect(() => {
  if(playlists.length > 1) setActivePlaylist(1)
}, [playlists])

useEffect(() => {
  if(activePlaylist > 0)
    fetchData(activePlaylist)
}, [activePlaylist])

  return (
    <Card className={``} hidden={hidden} hiddenable>
      <div className="flex flex-row justify-between items-center">
        <h1 className="">
          <select className="p-3 rounded-lg bg-slate-100 dark:bg-slate-900 cursor-pointer hover:bg-slate-200 border border-slate-200 dark:border-slate-800">
          {playlists.map((item, index) => (
            index > 0 && <option onClick={() => handleActivePlaylist(index)} key={index}>{item}</option>
          ))}
          </select> 
        </h1>
        <div dir="rtl" className="flex flex-row items-center">
          <Input color="danger" value={newPlaylist} onChange={(event) => setNewPlaylist(event.target.value)} placeholder="نام گروه را وارد کنید" className="w-[160px]"/>
          <Button onClick={() => addPlaylist()}>+</Button>  
          <Button onClick={() => removePlaylist()}>-</Button>   
        </div>
      </div>
      
      <Divider />
      <List hoverable border className="max-h-[320px] overflow-scroll">
        {playlistItems.map((item: MediaInterface, index: number) => (
          <div
            onClick={() => handleClick(item, index)}
            key={index}
            className={`flex flex-row flex-wrap flex-grow justify-evenly  items-center gap-4`}
          >
            <div className="w-10 h-10 p-1">
              {item.coverImage && <ImageContainer src={item.coverImage} />}
            </div>
            <div className="flex flex-col w-28">
              <h3 className="text-sm font-extralight">
                {shortenTitle(item.title, 12)}
              </h3>
              <span className="text-xs font-thin">
                {item.artist && shortenTitle(item.artist, 10)}/
                {item.album && shortenTitle(item.album, 10)}
              </span>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row flex-shrink">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-slate-400 dark:text-slate-500 px-3"
                />
                <h6 className="min-w-[60px] font-thin text-xs">
                  {item.duration && calcDuration(item.duration)}
                </h6>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row flex-shrink">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="text-slate-400 dark:text-slate-500 px-3"
                />
                <h6 className="min-w-[60px] font-thin text-xs">
                  {item.releaseDate}
                </h6>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row flex-shrink">
                <FontAwesomeIcon
                  icon={faInfo}
                  className="text-slate-400 dark:text-slate-500 px-3"
                />
                <h6 className="min-w-[60px] font-thin text-xs">
                  {item.size ? bytesToMegabytes(item.size) : ""}MB
                </h6>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row flex-shrink items-center justify-between">
                <Link href={item.downloadable ? item.src : ""}>
                  <span className="text-xs font-thin">
                    {item.type}
                    <FontAwesomeIcon
                      icon={faDownload}
                      className={`text-slate-400 dark:text-slate-500 px-3 hover:text-indigo-500 dark:hover:text-indigo-200 ${
                        item.downloadable ? "" : "cursor-not-allowed"
                      }`}
                    />
                  </span>
                </Link>
                <FontAwesomeIcon
                  icon={faPlay}
                  className={`${
                    active === index
                      ? "text-indigo-500 dark:text-indigo-200"
                      : "text-slate-400 dark:text-slate-500"
                  }  px-3 hover:text-indigo-500 dark:hover:text-indigo-200`}
                />
              </div>
            </div>
          </div>
        ))}
      </List>
      <div className="w-full my-2">
        <DragAndDropFileUpload onFileUpload={handleFileUpload} />
      </div>
    </Card>
  );
};

export default Playlist;

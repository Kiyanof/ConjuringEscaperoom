import {
  HTMLAttributes,
  MutableRefObject,
  Ref,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Playlist, { MediaInterface } from "./Playlist";
import Card from "../Card/Card";
import Player, { isVideoFile } from "./Player";
import MediaControl from "./Control";
import { RootState } from "@/redux";
import { useDispatch, useSelector } from "react-redux";
import { initiatePlaylists, setRefresh } from "@/redux/reducers/mediaplayer";
import { fetchInitialState } from "@/api/initiateRedux";

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

const MediaPlayer: React.FC<MediaPlayerInterface> = ({
  controls = true,
  playlist = [],
  ...props
}) => {
  const [src, setSrc] = useState("");
  const [item, setItem] = useState<MediaInterface>();
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [showPlaylist, setShowPlaylist] = useState(playlist ? true : false);
  const [mediaElement, setMediaElement] = useState<
    HTMLAudioElement | HTMLVideoElement | null
  >();
  const media = useRef<HTMLAudioElement | HTMLVideoElement | null>();
  const refresh = useSelector((state: RootState) => state.mediaplayer.refresh);
  const dispatch = useDispatch();

  const handleItem = (item: MediaInterface) => {
    setItem(item);
    setSrc(item.src);
    item.duration && setCurrentTime(item.duration);
    const current = media.current;
    if (current) {
      current.src = item.src;
    }
  };

  const handlePlaylist = () => {
    if (playlist) setShowPlaylist(!showPlaylist);
  };

  const handleRangeChange = (inp: number) => {
    setCurrentTime(inp);
  };

  useEffect(() => {
    const audioElement = document.createElement("audio");
    audioElement.controls = false;
    document.body.appendChild(audioElement);
    setMediaElement(audioElement);
  }, []);

  const fetchData = async (initialFunc: Function, model: string) => {
    try {
      const data = await fetchInitialState(model);
      if (data !== null) {
        initialFunc(data);
      } else {
        // Handle the case when data is null, e.g., show an error message
      }
    } catch (error) {
      console.error("Error fetching initial state:", error);
      // Handle the error, e.g., show an error message
    }
  };

  const initiatePlaylistsFunc = (result: Object[]) => {
    dispatch(
      initiatePlaylists({
        value: result.map((item: any, index) => item.name),
      })
    );
  };

  useEffect(() => {

    if (refresh) {
      fetchData(initiatePlaylistsFunc, "mediaplayer");
      dispatch(setRefresh({ value: false }));
    }
  }, [refresh]);

  return (
    <Card className="w-full flex flex-col gap-4 flex-wrap flex-shrink justify-center items-center h-fit transition-height duration-300 ease-in-out">
      <div className="flex flex-col gap-4 justify-center items-center">
        <Player item={item} mediaElement={mediaElement} />
        {controls && (
          <MediaControl
            mediaElement={mediaElement}
            handleRangeChange={handleRangeChange}
            item={item}
            playlistBtnOnClick={handlePlaylist}
            currentTime={currentTime}
          />
        )}
      </div>
      <Playlist hidden={showPlaylist} onClick={handleItem} />
    </Card>
  );
};

export default MediaPlayer;

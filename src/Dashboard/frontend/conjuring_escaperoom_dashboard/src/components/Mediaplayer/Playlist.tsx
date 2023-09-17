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
import { useCallback, useEffect, useState } from "react";
import DragAndDropFileUpload from "../DragDropFile";
import jsmediatags from "jsmediatags";
import { PictureType } from "jsmediatags/types";
import { isVideoFile } from "./Player";
import axios, { AxiosResponse } from "axios";
import { stringify } from "querystring";

export interface MediaInterface {
  src: string;
  title: string;
  artist?: string;
  duration?: number;
  album?: string;
  coverImage?: string | StaticImageData | PictureType;
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
  {
    src: "https://example.com/media1.mp3",
    title: "blue sky & the moon",
    artist: "Artist 1",
    duration: 180,
    album: "Album 1",
    coverImage: musicImg,
    genre: "Pop",
    releaseDate: "2001",
    size: 89471280,
    downloadable: true,
    type: "mp3",
  },
  {
    src: "https://example.com/media2.mp4",
    title: "Song 2",
    artist: "Artist 2",
    duration: 240,
    album: "Album 2",
    coverImage: videoImg,
    genre: "Rock",
    releaseDate: "2003",
    size: 43522,
    downloadable: true,
    type: "mp4",
  },
  {
    src: "https://example.com/media3.mp3",
    title: "Song 3",
    artist: "Artist 3",
    duration: 210,
    album: "Album 3",
    coverImage: musicImg,
    genre: "Electronic",
    releaseDate: "2019",
    size: 235135,
    downloadable: false,
    type: "mp3",
  },
  {
    src: "https://example.com/media4.mp3",
    title: "Song 4",
    artist: "Artist 4",
    duration: 195123,
    album: "Album 4",
    coverImage: musicImg,
    genre: "R&B",
    releaseDate: "2020",
    size: 432554,
    downloadable: false,
    type: "mp3",
  },
  {
    src: "https://example.com/media5.mp4",
    title: "Song 5",
    artist: "Artist 5",
    duration: 220,
    album: "Album 5",
    coverImage: videoImg,
    genre: "Hip Hop",
    releaseDate: "2024",
    size: 365313,
    downloadable: true,
    type: "mp4",
  },
  {
    src: "https://example.com/media5.mp4",
    title: "Song 5",
    artist: "Artist 5",
    duration: 220,
    album: "Album 5",
    coverImage: videoImg,
    genre: "Hip Hop",
    releaseDate: "2022",
    size: 365313,
    downloadable: true,
    type: "mp4",
  },
  {
    src: "https://example.com/media5.mp4",
    title: "Song 5",
    artist: "Artist 5",
    duration: 220,
    album: "Album 5",
    coverImage: videoImg,
    genre: "Hip Hop",
    releaseDate: "2021",
    size: 365313,
    downloadable: true,
    type: "mp3",
  },
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
  title = "Playlist",
  onClick,
  hidden = false,
  ...props
}) => {
  const [active, setActive] = useState(-1);
  const [playlistItems, setPlaylistItems] = useState<MediaInterface[]>(items);

  const handleClick = (item: MediaInterface, index: number) => {
    onClick && onClick(item);
    setActive(index);
  };

  const [uploadedFiles, setUploadedFiles] = useState<FileList | undefined>();

  const handleFileUpload = async (files: FileList) => {
    const newFiles = Array.from(files);
    //setUploadedFiles(files);
    const newItems = [...playlistItems];
    const formData = new FormData();
    newFiles.forEach((file) => {
      jsmediatags.read(file, {
        onSuccess: (tag) => {
          const fileTag: MediaInterface = {
            src: URL.createObjectURL(file),
            title: file.name,
            artist: tag?.tags?.artist,
            duration: +tag?.tags?.duration,
            album: tag?.tags?.album, 
            coverImage: isVideoFile(file.name) ? videoImg : musicImg,
            genre: tag?.tags?.genre,
            releaseDate: tag?.tags?.year,
            size: file.size,
            downloadable: true,
            type: file.name.split(".")[file.name.split.length - 1],
          };
          newItems.push(fileTag);
          formData.append("metadata", JSON.stringify(fileTag));

          const response2 = fetch("http://localhost:8000/mediaplayer/save", {
            method: "POST",
            body: JSON.stringify({ ...fileTag, src: "", coverImage: "" , playlist: title}),
            headers: {
              "Content-Type": "application/json",
            },
          });
        },
      });
      formData.append("files", file);
    });
    try {
      const response1 = await fetch(
        "http://localhost:8000/mediaplayer/upload",
        {
          method: "POST",
          body: formData,
        }
      );
    } catch (error) {
      console.error("Error uploading files:", error);
    }
    setPlaylistItems(newItems);
  };

  useEffect(() => {
    setPlaylistItems(items);
  }, [items]);

  return (
    <Card className={``} hidden={hidden} hiddenable>
      <h1 className="w-full text-center">{title}</h1>
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

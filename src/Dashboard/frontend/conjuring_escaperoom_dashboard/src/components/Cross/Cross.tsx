import Image from "next/image";
import crossImage from "@/../public/cross.png";
import SevenSegmentDisplay from "./SevenSegmentDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnchor,
  faAnkh,
  faClock,
  faCross,
  faPause,
  faPlay,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Switch from "../Form/SwitchButton";
import IDFields from "./IDFields";
import TimeFields from "./TimeFields";
import LEDs from "./LEDs";
import Information from "./Information";
import { buzzerActiveAPI, startAPI, stopAPI } from "@/utils/crossAPI";
import ipTables from "@/configs/ip";
import Sensitivity from "./Sensitivity";
import Divider from "../Divider";

import SensitivityFields from "./SensitivityFields";
import Relays from "./Relay";
import LeftToolbar from "./toolbars/LeftToolbar";
import RightToolbar from "./toolbars/RightToolbar";

interface CrossInterface {
  id?: number;
  pairId?: number;
  index?: number;
}

const Cross: React.FC<CrossInterface> = ({
  id = 100,
  pairId = 110,
  index = 0,
}) => {
  const [missionTimer, setMissionTimer] = useState<number>(0);
  const [relayActive, setRelayActive] = useState<boolean>(false);
  const [buzzerActive, setBuzzerActive] = useState<boolean>(false);
  const [missionActive, setMissionActive] = useState<boolean>(false);

  const [relaysPanel, setRelayPanel] = useState<boolean>(false);
  const [sensitivityPanel, setSensitivityPanel] = useState<boolean>(true);
  const [timePanel, setTimePanel] = useState<boolean>(true);

  const handleMissionTimerChange = (inp: number) => {
    setMissionTimer(inp);
  };

  const handlePlay = () => {
    const newState = !missionActive;
    setMissionActive(newState);
    if (newState) {
      startAPI(id);
    } else {
      stopAPI(id);
    }
  };

  const handleVolume = () => {
    const newState = !buzzerActive;
    setBuzzerActive(newState);
    buzzerActiveAPI(id, newState);
  };

  const handleActive = () => {
    const newState = !relayActive;
    setRelayActive(newState);
    if (newState) {
    } else {
    }
  };

  return (
    <div className="flex flex-row justify-between w-full h-full p-4">
      <div className="h-full w-[400px]">
        <LeftToolbar />
      </div>
      <div className="relative w-full h-full">
        <div className="absolute left-1/2 -translate-x-[50%]  top-[120px] w-[520px] overflow-hidden">
          <Image src={crossImage} alt="Cross Image" width={540} height={400} />
        </div>
        <div className="absolute left-0 top-0 w-full items-start flex justify-center gap-6 overflow-auto">
          <IDFields
            senderID={ipTables.protocol + ipTables.subnet + id}
            recieverID={ipTables.protocol + ipTables.subnet + pairId}
          />
        </div>
        <div className="absolute left-1/2 top-1/3 translate-x-[-16px] -translate-y-8">
          <LEDs id={id} />
        </div>
        <div className="absolute left-1/2 -translate-x-[51%]  bottom-1/4 w-fit">
          <div className="flex flex-row gap-1 -rotate-90 w-28  bg-black scale-90">
            <SevenSegmentDisplay value={missionTimer} digits={4} />
          </div>
        </div>
      </div>
      <div className="h-full w-[400px]">
        <RightToolbar crossIndex={index}/>
      </div>
    </div>
  );
};

export default Cross;

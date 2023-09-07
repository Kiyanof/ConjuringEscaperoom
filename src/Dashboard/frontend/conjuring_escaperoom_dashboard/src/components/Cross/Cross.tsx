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
import DeviceInfo from "./DeviceInfo";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";

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

  const handleMissionTimerChange = (inp: number) => {
    setMissionTimer(inp);
  };

  console.log(index)

  return (
    <div className="flex flex-row justify-between w-full h-full p-4">
      <div className="h-full w-[250px]">
        <LeftToolbar crossIndex={index}/>
      </div>
      <div className="flex flex-col items-center justify-start gap-2 h-full w-[600px]">
      <div className="w-full">
        <DeviceInfo crossIndex={index}/>
      </div>
      <div className="relative w-full h-fit">
        <div className="absolute left-1/2 -translate-x-[50%] top-16  w-[520px] overflow-hidden">
          <Image src={crossImage} alt="Cross Image" width={540} height={400} />
        </div>
        <div className="absolute left-1/2 top-28 translate-x-[-16px] ">
          <LEDs crossIndex={index} />
        </div>
        <div className="absolute left-1/2 -translate-x-[51%]  top-96 w-fit">
          <div className="flex flex-row gap-1 -rotate-90 w-28  bg-black scale-90">
            <SevenSegmentDisplay value={missionTimer} digits={4} />
          </div>
        </div>
      </div>
      </div>
      
      <div className="h-full w-[250px]">
        <RightToolbar missionTimerChangeFunction={handleMissionTimerChange} crossIndex={index}/>
      </div>
    </div>
  );
};

export default Cross;

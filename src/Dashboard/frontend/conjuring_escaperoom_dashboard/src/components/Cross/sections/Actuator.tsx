import {
    faClose,
    faDriversLicense,
  faPause,
  faPlay,
  faSignIn,
  faSignOut,
  faVolumeMute,
  faVolumeUp,
  faWifi,
  faWifi3,
  faWifiStrong,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "../toolbars/Button";

interface ActuatorInterface {}

const Actuator: React.FC<ActuatorInterface> = ({}) => {
  const [missionState, setMissionState] = useState(false);
  const [buzzerState, setBuzzerState] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);


  const actuatorCenters = [
    {
      title: "Mission State",
      icon: missionState ? faPause : faPlay,
      onclick: () => null,
    },
    {
      title: "Buzzer State",
      icon: buzzerState ? faVolumeMute : faVolumeUp ,
      onclick: () => null,
    },
    {
        title: "Offline Mode",
        icon: offlineMode ? faWifi : faClose ,
        onclick: () => null,
      },
  ];

  return (
    <div className="flex flex-row h-full w-full items-center justify-between gap-2 px-2">
      {actuatorCenters.map((item, index) => (
        <Button icon={item.icon} key={index} />
      ))}
    </div>
  );
};

export default Actuator;

import {
    faClose,
  faPause,
  faPlay,
  faVolumeMute,
  faVolumeUp,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "../toolbars/Button";
import { RootState } from "@/redux";
import { useDispatch, useSelector } from "react-redux";
import { setCross } from "@/redux/reducers/cross";

interface ActuatorInterface {
  crossIndex?: number,
}

const Actuator: React.FC<ActuatorInterface> = ({crossIndex = 0}) => {

  const [missionState, setMissionState] = useState(false);
  const [buzzerState, setBuzzerState] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);

  const dispatch = useDispatch()

  const cross = useSelector((state: RootState) => state.cross.cross[crossIndex])


  const toggleMissionState = () => {
    const newState = !missionState
    setMissionState(newState)
  }

  const toggleBuzzerState = () => {
    const newState = !buzzerState
    setBuzzerState(newState)
  }

  const toggleOfflineMode = () => {
    const newState = !offlineMode
    setOfflineMode(newState)
    const newCrossInformation = {...cross}
    newCrossInformation.active = newState
    dispatch(setCross({index: crossIndex, value: newCrossInformation}))
  }

  const actuatorCenters = [
    {
      title: "Mission State",
      icon: missionState ? faPause : faPlay,
      onclick: () => toggleMissionState(),
    },
    {
      title: "Buzzer State",
      icon: buzzerState ? faVolumeMute : faVolumeUp ,
      onclick: () => toggleBuzzerState(),
    },
    {
        title: "Offline Mode",
        icon: offlineMode ? faWifi : faClose ,
        onclick: () => toggleOfflineMode(),
      },
  ];

  return (
    <div className="flex flex-row h-full w-full items-center justify-between gap-2 px-2">
      {actuatorCenters.map((item, index) => (
        <Button onClick={item.onclick} icon={item.icon} key={index} />
      ))}
    </div>
  );
};

export default Actuator;

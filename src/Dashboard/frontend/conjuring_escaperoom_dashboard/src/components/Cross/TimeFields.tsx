import { setBuzzerDelayAPI, setDurationAPI, setRSSIAPI } from "@/utils/crossAPI";
import {
  faCheck,
  faDownLeftAndUpRightToCenter,
  faTimeline,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useEffect, useState } from "react";
import Counter from "../Form/Counter";

interface TimeFieldsInterface {
  missionTimerChangeFunction: (inp: number) => void,
  id?: number,
}

const TimeFields: React.FC<TimeFieldsInterface> = ({missionTimerChangeFunction, id = 100}) => {

  const [missionTimer, setMissionTimer] = useState<number>(0);
  const [buzzerDelay, setBuzzerDelay] = useState<number>(500);


  const handleMissionTimerChange = (inp: number) => {
    const value = inp;
    if (value >= 0 && value < 10000) {
      setMissionTimer(value);
      missionTimerChangeFunction(value);
    } else {
      setMissionTimer(0);
      missionTimerChangeFunction(0);
    }
  };

  const handleBuzzerDelayChange = (inp: number) => {
    const value = inp;
    if (value >= 0 && value < 10000) {
      setBuzzerDelay(value);
    } else {
      setBuzzerDelay(0);
    }
  };

  const handleTimeChange = (
    index: number,
    value: number
  ) => {
    const newValue = value
    switch (index) {
      case 1:
        handleMissionTimerChange(newValue);
        break;
      case 2:
        handleBuzzerDelayChange(newValue);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleMissionTimerChange(missionTimer);
    handleBuzzerDelayChange(buzzerDelay);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleTimeChange])

  const missionTimeSubmit = () => {
    setDurationAPI(id, missionTimer)
  }

  const buzzerDelaySubmit = () => {
    setBuzzerDelayAPI(id, buzzerDelay)
  }

  const fields = [
    {
      placeholder: "Mission",
      icon: faUserClock,
      value: missionTimer,
      onChange: (value: number) => handleTimeChange(1, value),
      onSubmit: () => missionTimeSubmit(),
    },
    {
      placeholder: "Buzzer",
      icon: faTimeline,
      value: buzzerDelay,
      onChange: (value: number) => handleTimeChange(2, value),
      onSubmit: () => buzzerDelaySubmit(),
    },
  ];

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {fields.map((field, index) => (
        <Counter icon={field.icon} value={field.value} onchange={field.onChange} onsubmit={field.onSubmit} key={index}/>
        
      ))}
    </div>
  );
};

export default TimeFields;


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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux";
import { setCross } from "@/redux/reducers/cross";

interface TimeFieldsInterface {
  missionTimerChangeFunction: (inp: number) => void,
  crossIndex?: number,
}

const TimeFields: React.FC<TimeFieldsInterface> = ({missionTimerChangeFunction, crossIndex = 0}) => {

  const length = useSelector((state: RootState) => state.cross.cross.length)
    const cross = useSelector((state: RootState) => state.cross.cross[crossIndex])

  const dispatch = useDispatch()
  const [missionTimer, setMissionTimer] = useState<number>(0);
  const [buzzerDelay, setBuzzerDelay] = useState<number>(cross.buzzerDelay);


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
    setDurationAPI(crossIndex, missionTimer)

  }

  const buzzerDelaySubmit = () => {
    setBuzzerDelayAPI(crossIndex, buzzerDelay)
    const newCrossInformation = {...cross}
    newCrossInformation.buzzerDelay = buzzerDelay
    dispatch(setCross({index: crossIndex, value: newCrossInformation}))
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


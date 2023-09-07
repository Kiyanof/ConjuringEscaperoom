import { setBuzzerDelayAPI, setDurationAPI, setRSSIAPI } from "@/utils/crossAPI";
import {
  faAnchorLock,
  faCheck, faCrosshairs, faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";
import Counter from "../Form/Counter";
import { RootState } from "@/redux";
import { useSelector } from "react-redux";

interface RelayFieldsInterface {
  crossIndex?: number,
}

const RelayFields: React.FC<RelayFieldsInterface> = ({crossIndex = 0}) => {

  const cross = useSelector((state: RootState) => state.cross.cross)

  const [rssi, setRssi] = useState<number[]>(cross[crossIndex].toRelayRSSI);

  const handleRSSIChange = (value: number, index: number) => {
    const newValue = value;
    const newRSSI = [...rssi]
    if (newValue >= 0 && value < 90) {
      newRSSI[index] = newValue
    } else {
      newRSSI[index] = 0
    }
    setRssi(newRSSI);
  };


  const rssiSubmit = (index: number) => {

  }


  const fields = Array.from({length: 10}, (v, k) => {
    return {
      placeholder: (k+1),
      value: rssi[k],
      onChange: (value: number) => handleRSSIChange(value, k),
      onSubmit: () => rssiSubmit(k),
    }
  })



  return (
    <div className=" h-[250px] overflow-y-auto overflow-x-hidden flex flex-col gap-4">
      {fields.map((field, index) => (
        <div className="flex flex-row" key={index}>
        <i className="text-indigo-800">{index + 1}</i>
        <Counter icon={faAnchorLock} value={rssi[index]}  onchange={field.onChange} onsubmit={field.onSubmit} />
        </div>
      ))}
    </div>
  );
};

export default RelayFields;


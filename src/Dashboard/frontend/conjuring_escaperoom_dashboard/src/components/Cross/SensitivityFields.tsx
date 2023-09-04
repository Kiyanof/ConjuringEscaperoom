import { setBuzzerDelayAPI, setDurationAPI, setRSSIAPI } from "@/utils/crossAPI";
import {
  faCheck, faCrosshairs, faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";
import Counter from "../Form/Counter";

interface SensitivityFieldsInterface {
  crossIndex?: number,
}

const SensitivityFields: React.FC<SensitivityFieldsInterface> = ({crossIndex = 0}) => {

  const [rssi, setRssi] = useState<number[]>([
    70, 70, 70, 70, 70, 70, 70, 70, 70, 70
  ]
  );

  const handleRSSIChange = (value: number, index: number) => {
    const newValue = value;
    const newRSSI = [...rssi]
    if (newValue >= 0 && value < 90 && crossIndex !== index) {
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
          <i className={`${crossIndex === index ? 'text-red-600' : 'text-indigo-800'}`}>{index + 1}</i>
          <Counter icon={faUpRightAndDownLeftFromCenter} value={rssi[index]} onchange={field.onChange} onsubmit={field.onSubmit} />
        </div>
      ))}
    </div>
  );
};

export default SensitivityFields;


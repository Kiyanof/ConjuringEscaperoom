import { setBuzzerDelayAPI, setDurationAPI, setRSSIAPI } from "@/utils/crossAPI";
import {
  faCheck, faCrosshairs, faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";
import Counter from "../Form/Counter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux";
import { setCross } from "@/redux/reducers/cross";

interface SensitivityFieldsInterface {
  crossIndex?: number,
}

const SensitivityFields: React.FC<SensitivityFieldsInterface> = ({crossIndex = 0}) => {

  const length = useSelector((state: RootState) => state.cross.cross.length)
  const cross = useSelector((state: RootState) => state.cross.cross[crossIndex])
  const dispatch = useDispatch()

  const [rssi, setRssi] = useState<number[]>(cross.toCrossRSSI);

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


  const rssiSubmit = () => {
    const newCrossInformation = {...cross}
    newCrossInformation.toCrossRSSI = rssi
    dispatch(setCross({index: crossIndex, value: newCrossInformation}))
  }


  const fields = Array.from({length: 10}, (v, k) => {
    return {
      placeholder: (k+1),
      value: rssi[k],
      onChange: (value: number) => handleRSSIChange(value, k),
      onSubmit: () => rssiSubmit(),
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


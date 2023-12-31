import Switch from "@/components/Form/SwitchButton";
import {
  faDeleteLeft,
  faMobile,
  faNetworkWired,
  faSignal,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import bluetoothImage from "@/../public/bluetooth.png";
import { recieverInterface, setReciever } from "@/redux/reducers/reciever";
import EditableField from "./EditableField";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

interface SignalComponentInterface {
  signals?: recieverInterface[];
}

const Signal: React.FC<SignalComponentInterface> = ({ signals = [] }) => {
  const [states, setStates] = useState<boolean[]>();

  const dispatch = useDispatch();

  const fields = Array.from({ length: signals.length }, (v, k) => {
    return [
      {
        icon: faMobile,
        title: "نام دستگاه",
        value: signals[k].deviceName,
        onInput: (e: string) => handleOnInput(e, k, 0),
      },
      {
        icon: faNetworkWired,
        title: "آدرس",
        value: signals[k].ip,
        onInput: (e: string) => handleOnInput(e, k, 1),
      },
      {
        icon: faNetworkWired,
        title: "کد",
        value: signals[k].BlueUUID,
        onInput: (e: string) => handleOnInput(e, k, 2),
      },
      {
        icon: faSignal,
        title: "سیگنال",
        value: signals[k].RSSI,
        onInput: (e: string) => handleOnInput(e, k, 3),
      },
    ];
  });

  const handleOnInput = (e: string, index: number, field: number) => {
    const newState = [...fields];
    newState[index][field].value = e;
    console.log(e)
    dispatch(
      setReciever({
        index: index,
        value: {
          deviceName: newState[index][0].value,
          ip: newState[index][1].value,
          BlueUUID: newState[index][2].value,
          RSSI: newState[index][3].value,
        },
      })
    );
  };

  return (
    <div className="w-full h-full">
      {signals.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-center sm:justify-around justify-start flex-wrap
                        p-4 w-full hover:bg-slate-200 dark:hover:bg-slate-950 cursor-pointer sm:h-[180px] h-full gap-2
                        "
        >
          <FontAwesomeIcon className="hover:text-red-500" icon={faDeleteLeft} />
          <Image src={bluetoothImage} width={50} alt="Bluetooth" />
          {fields[index].map((field, i) => (
            <EditableField
              key={i}
              icon={field.icon}
              value={field.value}
              title={field.title}
              onInput={(e: string) => field.onInput(e)}
            />
          ))}

          <span className="inline-flex gap-2 items-center text-xs border border-slate-300 dark:border-slate-800 p-1 rounded-md">
            <FontAwesomeIcon icon={faWandSparkles} /> فعال :
            <div dir="ltr">
              <Switch
                className="mt-3"
                color="danger"
                onClick={() => null}
                checked={item.State}
              />
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Signal;

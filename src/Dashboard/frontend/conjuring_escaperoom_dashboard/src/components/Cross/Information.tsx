import {
  faBattery0,
  faBattery2,
  faBattery3,
  faBattery4,
  faBattery5,
  faClose,
  faSignal5,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface InformationInterface {
  rssi?: number;
  battery?: number;
}

const Information: React.FC<InformationInterface> = ({
  rssi = 0,
  battery = 0,
}) => {
  const [items, setItems] = useState([
    {
      title: "Signal: ",
      icons: [faClose, faSignal5],
      param: rssi,
    },
    {
      title: "Battery: ",
      icons: [faBattery0, faBattery2, faBattery3, faBattery4, faBattery5],
      param: battery,
    },
  ]);

  const handleRSSIChange = (inp: number) => {
    const newItems = [...items];
    if (inp >= 0) newItems[0].param = 0;
    else newItems[0].param = 1;
    setItems(newItems)
  };

  const handleBatteryChange = (inp: number) => {
    const newItems = [...items];
    if (inp >= 0 && inp < 5) newItems[1].param = inp;
    else newItems[1].param = 0;
    setItems(newItems)
  };

  useEffect(() => {
    handleRSSIChange(rssi);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rssi]);

  useEffect(() => {
    handleBatteryChange(battery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [battery]);

  return (
    <div className="flex flex-row gap-2 justify-between items-center">
      {items.map((item, index) => (
        <FontAwesomeIcon key={index} icon={item.icons[item.param]} />
      ))}
    </div>
  );
};

export default Information;

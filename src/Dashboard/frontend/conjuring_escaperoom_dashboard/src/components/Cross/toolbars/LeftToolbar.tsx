import React, { HTMLAttributes } from "react";
import Toolbar, { ToolbarInterface } from "./Toolbar";
import Section from "./Section";
import {
  faAnchor,
  faAnchorLock,
  faClock,
  faCross,
  faDigitalTachograph,
  faDownLeftAndUpRightToCenter,
  faExclamationTriangle,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import Sensitivity from "../Sensitivity";
import Relays from "../Relay";
import Actuator from "../sections/Actuator";
import { useDispatch } from "react-redux";
import { setToolbarView } from "@/redux/reducers/cross";

interface LeftToolbar extends ToolbarInterface {
  crossIndex?: number;
}

const LeftToolbar: React.FC<LeftToolbar> = ({ crossIndex = 0 }) => {
  const dispatch = useDispatch();

  const handleView = (index: number) => {
    dispatch(setToolbarView(index));
  };

  const controlCenters = [
    {
      title: "States Panel",
      icon: faExclamationTriangle,
      onclick: (index: number) => handleView(index),
    },
    {
      title: "Cross Panel",
      icon: faCross,
      onclick: (index: number) => handleView(index),
    },

    {
      title: "Relay Panel",
      icon: faAnchor,
      onclick: (index: number) => handleView(index),
    },
    {
      title: "Delay Panel",
      icon: faClock,
      onclick: (index: number) => handleView(index),
    },
    {
      title: "Score Panel",
      icon: faDigitalTachograph,
      onclick: (index: number) => handleView(index),
    },
    {
      title: "Cross Distance Panel",
      icon: faDownLeftAndUpRightToCenter,
      onclick: (index: number) => handleView(index),
    },
    {
      title: "Relays Distance Panel",
      icon: faAnchorLock,
      onclick: (index: number) => handleView(index),
    },
    {
      title: "Device Info",
      icon: faInfo,
      onclick: (index: number) => handleView(index),
    },
  ];

  return (
    <Toolbar>
      <Section title="تنظیمات">
        <div className="w-full flex flex-row flex-wrap justify-between gap-2">
          {controlCenters.map((item, index) => (
            <Button
              onClick={() => item.onclick(index)}
              icon={item.icon}
              key={index}
            />
          ))}
        </div>
      </Section>
      <Section index={0} title="کنترل عملگرها" icon={faExclamationTriangle}>
        <Actuator />
      </Section>
      <Section index={1} title="صلیب های واکنش دهنده" icon={faCross}>
        <Sensitivity crossIndex={crossIndex} />
      </Section>
      <Section index={2} title="رله های واکنش دهنده" icon={faAnchor}>
        <Relays crossIndex={crossIndex}/>
      </Section>
    </Toolbar>
  );
};

export default LeftToolbar;

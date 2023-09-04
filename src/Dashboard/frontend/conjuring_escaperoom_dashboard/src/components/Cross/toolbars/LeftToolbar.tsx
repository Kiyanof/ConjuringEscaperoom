import React, { HTMLAttributes } from "react";
import Toolbar, {ToolbarInterface } from "./Toolbar";
import Section from "./Section";
import { faAnchor, faAnchorLock, faClock, faCross, faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import Sensitivity from "../Sensitivity";
import Relays from "../Relay";

interface LeftToolbar extends ToolbarInterface {
    crossIndex?: number;
}

const LeftToolbar: React.FC<LeftToolbar> = ({crossIndex = 0}) => {

    const controlCenters = [
        {
            title: 'Cross Panel',
            icon: faCross,
            onclick: () => null,
        },
        {
            title: 'Relay Panel',
            icon: faAnchor,
            onclick: () => null,
        },
        {
            title: 'Delay Panel',
            icon: faClock,
            onclick: () => null,
        },
        {
            title: 'Cross Distance Panel',
            icon: faDownLeftAndUpRightToCenter,
            onclick: () => null,
        },
        {
            title: 'Relays Distance Panel',
            icon: faAnchorLock,
            onclick: () => null,
        },

    ]

    return (
        <Toolbar>
            <Section title="تنظیمات">
                <div className="w-full flex flex-row flex-wrap justify-between gap-2">
                    {controlCenters.map((item, index) => (
                        <Button icon={item.icon} key={index} />
                    ))}
                </div>
            </Section>
            <Section title="صلیب های واکنش دهنده">
                <Sensitivity crossIndex={0}/>
            </Section>
            <Section title="رله های واکنش دهنده">
                <Relays />
            </Section>
        </Toolbar>
    )
}

export default LeftToolbar


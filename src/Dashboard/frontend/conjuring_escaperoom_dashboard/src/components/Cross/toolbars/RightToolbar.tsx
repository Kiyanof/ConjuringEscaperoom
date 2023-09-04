import React, { HTMLAttributes } from "react";
import Toolbar, {ToolbarInterface } from "./Toolbar";
import Section from "./Section";
import { faAnchor, faAnchorLock, faClock, faCross, faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import Sensitivity from "../Sensitivity";
import Relays from "../Relay";
import TimeFields from "../TimeFields";
import SensitivityFields from "../SensitivityFields";
import RelayFields from "../RelayFields";

interface RightToolbar extends ToolbarInterface {
    crossIndex?: number;
}

const RightToolbar: React.FC<RightToolbar> = ({crossIndex = 0}) => {

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
            <Section title="وقفه ها">
                <TimeFields id={100} missionTimerChangeFunction={() => null}/>
            </Section>
            <Section title="فاصله صلیب ها">
                <SensitivityFields crossIndex={crossIndex}/>
            </Section>
            <Section title="رله های واکنش دهنده">
                <RelayFields crossIndex={crossIndex} />
            </Section>
        </Toolbar>
    )
}

export default RightToolbar


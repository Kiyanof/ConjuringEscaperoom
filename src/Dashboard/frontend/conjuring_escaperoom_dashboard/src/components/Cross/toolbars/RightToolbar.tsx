import React from "react";
import Toolbar, {ToolbarInterface } from "./Toolbar";
import Section from "./Section";
import { faAnchorLock, faClock, faDigitalTachograph, faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons";
import TimeFields from "../TimeFields";
import SensitivityFields from "../SensitivityFields";
import RelayFields from "../RelayFields";
import Score from "../sections/Scores";

interface RightToolbar extends ToolbarInterface {
    crossIndex?: number;
}

const RightToolbar: React.FC<RightToolbar> = ({crossIndex = 0}) => {

    return (
        <Toolbar>
            <Section index={3} title="وقفه ها" icon={faClock}>
                <TimeFields crossIndex={crossIndex} missionTimerChangeFunction={() => null}/>
            </Section>
            <Section index={4} title="مدیریت امتیاز" icon={faDigitalTachograph}>
                <Score crossIndex={crossIndex}/>
            </Section>
            <Section index={5} title="فاصله صلیب ها" icon={faDownLeftAndUpRightToCenter}>
                <SensitivityFields crossIndex={crossIndex}/>
            </Section>
            <Section index={6} title="فاصله رله های واکنش دهنده" icon={faAnchorLock}>
                <RelayFields crossIndex={crossIndex} />
            </Section>
        </Toolbar>
    )
}

export default RightToolbar


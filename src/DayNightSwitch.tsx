import {FC} from "react";
import {Label} from "./styled/Label";
import {Input} from "./styled/Input";
import {Wrap} from "./styled/Wrap";
import {RoundWrap} from "./styled/RoundWrap";
import {NightHole, Round, RoundGlow} from "./styled/Round";
import {nightStars, roundGlows, roundNightHoles} from "./constants";
import {NightStar, NightStartWrap} from "./styled/NightStar";
import {DayCloudLight, DayCloudPrimary} from "./styled/DayCloud";
import {DayNightSwitchProps} from "./models";

export const DayNightSwitch: FC<DayNightSwitchProps> = ({width = '222px', ...props}) => (
    <Label width={width}>
        <Input {...props} />
        <Wrap>
            <RoundWrap>
                <Round>
                    {roundNightHoles.map((hole, index) => <NightHole key={index} {...hole} />)}
                </Round>
                {roundGlows.map((glow, index) => <RoundGlow key={index} {...glow}/>)}
            </RoundWrap>

            <NightStartWrap>
                {nightStars.map((star, index) => <NightStar key={index} {...star}/>)}
            </NightStartWrap>

            <DayCloudPrimary/>
            <DayCloudLight/>
        </Wrap>
    </Label>
)

import styled from "styled-components";
import {Wrap} from "./Wrap";
import {RoundWrap} from "./RoundWrap";
import {NightHole, Round} from "./Round";
import {NightStartWrap, starFadeIn} from "./NightStar";
import {fadeIn} from "./animation";
import {cloudFadeOut, DayCloudLight, DayCloudPrimary} from "./DayCloud";

export const Input = styled('input').attrs({type: "checkbox"})`
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;

  &:checked + ${Wrap} {
    background: #1B1D2A;
    box-shadow: 0px -2px 3px rgba(0, 0, 0, 0.25), 0px 3px 3px rgba(255, 255, 255, 0.94), inset 0px 1px 8px rgba(0, 0, 0, 0.25), inset 0px 4px 6px rgba(0, 0, 0, 0.25);

    ${RoundWrap} {
      transform: translateX(160%);
    }

    ${Round} {
      background: #C4C9D2;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25), 3px 5px 5px rgba(0, 0, 0, 0.25), inset 0px -3px 3px #373737, inset 2px 2px 2px rgba(255, 255, 255, 0.60);
    }

    ${NightHole} {
      ${fadeIn}
    }

    ${NightStartWrap} {
      ${starFadeIn};
    }

    ${DayCloudPrimary}, ${DayCloudLight} {
      ${cloudFadeOut}
    }
  }
`

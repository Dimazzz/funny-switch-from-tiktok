import styled from "styled-components";
import {fadeOut, transitionTime} from "./animation";
import {NightHoleProps, RoundGlowProps} from "../models";

export const Round = styled('span')`
  position: relative;
  z-index: 5;
  display: block;
  width: 100%;
  height: 100%;
  background: #FED62E;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25), 3px 4px 5px rgba(0, 0, 0, 0.25), inset 0px -3px 3px #B49A2C, inset 2px 3px 3px rgba(254, 255, 237, 0.60);
  border-radius: 50%;
  transition: ${transitionTime};
`

export const RoundGlow = styled('span')<RoundGlowProps>`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({size}) => size};
  height: ${({size}) => size};
`

export const NightHole = styled('span')<NightHoleProps>`
  display: block;
  position: absolute;
  background: #9DA5B5;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  width: ${({size}) => size};
  height: ${({size}) => size};
  left: ${({x}) => x};
  top: ${({y}) => y};
  ${fadeOut};
`

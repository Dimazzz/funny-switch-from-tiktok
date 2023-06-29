import styled from "styled-components";
import {transitionTime} from "./animation";

export const RoundWrap = styled('span')`
  position: absolute;
  z-index: 20;

  aspect-ratio: 1 / 1;
  height: 92%;
  left: 2%;
  top: 4%;
  transition: ${transitionTime};
`

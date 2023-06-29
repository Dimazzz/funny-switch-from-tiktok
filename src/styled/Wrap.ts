import styled from "styled-components";
import {transitionTime} from "./animation";

export const Wrap = styled('span')`
  position: absolute;
  cursor: pointer;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  transition: ${transitionTime};

  box-shadow: 0px -2px 3px rgba(0, 0, 0, 0.25), 0px 3px 3px rgba(255, 255, 255, 0.94), inset 0px 1px 8px rgba(0, 0, 0, 0.25), inset 0px 4px 5px rgba(0, 0, 0, 0.25);
  background: #3A8DCA;
  border-radius: 120px;
`

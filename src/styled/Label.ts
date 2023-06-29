import styled from "styled-components";
import {LabelProps} from "../models";

export const Label = styled('label')<LabelProps>`
  position: relative;
  display: inline-block;
  aspect-ratio: 2.5 / 1;
  width: ${({width}) => width};
`;

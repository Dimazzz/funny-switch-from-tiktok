import {css} from "styled-components";

export const transitionTime = '.8s'
export const fadeIn = css`
  visibility: visible;
  opacity: 1;
  transition: ${transitionTime};
`

export const fadeOut = css`
  visibility: hidden;
  opacity: 0;
  transition: ${transitionTime};
`

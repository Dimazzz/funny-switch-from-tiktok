import {CSSProperties, InputHTMLAttributes} from "react";

export interface LabelProps {
    width?: CSSProperties["width"];
}

export type DayNightSwitchProps = InputHTMLAttributes<HTMLInputElement> & LabelProps;

export interface RoundGlowProps {
    size: `${number}%`;
}

export interface NightHoleProps {
    size: `${number}%`;
    y: `${number}%`;
    x: `${number}%`
}

export interface NightStarProps {
    size: `${number}%`;
    y: `${number}%`;
    x: `${number}%`
}

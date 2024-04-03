import {InputHTMLAttributes} from "react";

export interface LabelProps {
    width?: string;
}

export type DayNightSwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'style' | 'height' | "width"> & LabelProps;

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

import {DetailedHTMLProps, FormEvent, FormHTMLAttributes} from "react";

export interface ControlWithButtonsProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    value: string
    setValue: (value: string) => void
    leftButton?: {
        text: string;
        callback: (e: FormEvent<HTMLButtonElement>) => void
    }[];
    rightButtons?: {
        text: string;
        callback: (e: FormEvent<HTMLButtonElement>) => void
    }[];
}

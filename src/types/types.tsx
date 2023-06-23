import { ButtonProps } from "@mui/material";
import { Dispatch, MouseEvent, ReactNode, SetStateAction } from "react";

export interface IButton {
    submitButton?: string 
    type: string
    name: string 
    onClick?: (event: MouseEvent<HTMLButtonElement>)=> void
    props?: ButtonProps
}

export interface IContextProps {
    userName: string
    setUserName: Dispatch<SetStateAction<string>>
    isOpen: boolean
    toggleModal: () => void
}

export interface IChildrenReact {
    children: ReactNode
}

export interface ILoginInput {
    login: string
    password: string
}
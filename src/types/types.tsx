import { ButtonProps } from "@mui/material";
import { Dispatch, MouseEvent, ReactNode, SetStateAction } from "react";

export interface IButton {
    submitButton?: string
    type: string
    name: string
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
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
    cpf: string
}

export interface IClient {
    numberDocument: string
    typeDocument: string
    name: string
    publicPlace: string
    number: string
    district: string
    city: string
    state: string
}

export interface IConductor {
    name: string
    numberQual: string
    categoryQual: string
    maturityQual: string
}

export interface IVehicle {
    plate: string
    brandModel: string
    yearManufacture: number
    currentKm: number
}
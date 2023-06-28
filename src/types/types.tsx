import { ButtonProps } from "@mui/material";
import { AxiosRequestConfig } from "axios";
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
    numeroDocumento:  AxiosRequestConfig<any> | undefined
}

export interface IClient {
    numeroDocumento: string
    tipoDocumento: string
    nome: string
    logradouro: string
    numero: string
    bairro: string
    cidade: string
    uf: string
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

'use cliente';

import { IChildrenReact, IContextProps } from "@/types/types";
import {
    createContext,
    useContext,
    useState
} from "react";

const GlobalContext = createContext<IContextProps>({
    userName: '',
    setUserName: (): string => '',
    isOpen: false,
    toggleModal: () => { }
})

export const GlobalContextProvider = ({ children }: IChildrenReact) => {
    const [isOpen, setIsOpen] = useState(false)
    const [ userName, setUserName] = useState('')

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <GlobalContext.Provider value={{isOpen, toggleModal, userName, setUserName}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)
'use cliente';

import { IChildrenReact, IContextProps } from "@/types/types";
import {
    createContext,
    useContext,
    useEffect,
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

    useEffect(()=>{
        const getName: string | any = localStorage.getItem('name')

        if(getName){
            setUserName(getName)
        }
    }, [])

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
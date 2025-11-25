import { createContext } from "react";
import supabase from "../../supabase";

export const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}
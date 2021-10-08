
import React from "react";
import { useState, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isModelOpen, setIsModelOpen ] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen ] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    const openModel = () => {
        setIsModelOpen(true);
    }
    const closeModel = () => {
        setIsModelOpen(false);
    }


    return (
        <AppContext.Provider value={{
            isModelOpen,
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            openModel,
            closeModel
        }}>

              { children }
              
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
     return useContext(AppContext)
   
}

export { AppContext, AppProvider }
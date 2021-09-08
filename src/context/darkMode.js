import { createContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({children}) => {
    const [dark, setDark] = useState(false);

    const changeTheme = () => {
        setDark(!dark);
    }

    return (
        <DarkModeContext.Provider value={{dark,changeTheme}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeContext;
export {DarkModeProvider};

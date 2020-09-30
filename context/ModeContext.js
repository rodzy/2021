import React, { useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ModeContext = React.createContext();

export const ModeProvider = ({ children }) => {
    const [mode, setMode] = useLocalStorage("mode", false);

    useEffect(() => {
        function userColorScheme() {
            if (typeof window !== "undefined") {
                if (!window.matchMedia) return;
                return window.matchMedia("(prefers-color-scheme:dark)").matches;
            }
        }
        const initialValue = userColorScheme();
        setMode(initialValue);
    }, []);

    return (
        <ModeContext.Provider value={{ mode, setMode }}>
            {children}
        </ModeContext.Provider>
    );
};

export function useModeContext() {
    const context = useContext(ModeContext);

    if (!context) {
        console.error("Error mounting the context!");
    }
    return context;
}

export default useModeContext;

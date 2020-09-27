import React, { useContext, useEffect, useMemo } from "react";
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

  const values = useMemo(
    () => ({
      mode,
      setMode,
    }),
    [mode]
  );

  return <ModeContext.Provider value={values}>{children}</ModeContext.Provider>;
};

export function useModeContext() {
  const context = useContext(ModeContext);

  if (!context) {
    console.error("Error mounting the context!");
  }
  return context;
}

export default useModeContext;

import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ModeContext = React.createContext();

const ModeProvider = (props) => {
  const [mode, setMode] = useLocalStorage("mode", userColorScheme());

  function userColorScheme() {
    if (typeof window !== "undefined") {
      if (!window.matchMedia) return;
      return window.matchMedia("(prefers-color-scheme:dark)").matches;
    }
  }
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {props.children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;

import { useState } from "react";
import GlobalContext from "./GlobalContext";
import GlobalSetterContext from "./GlobalSetterContext";

const GlobalProvider = ({ children }) => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  return (
    <GlobalContext.Provider value={{ isDarkModeOn }}>
      <GlobalSetterContext.Provider value={{ setIsDarkModeOn }}>
        {children}
      </GlobalSetterContext.Provider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

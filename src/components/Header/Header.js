import "./Header.css";
import classnames from "classnames";

import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import GlobalSetterContext from "../../context/GlobalSetterContext";

const Header = () => {
  const { isDarkModeOn } = useContext(GlobalContext);
  const { setIsDarkModeOn } = useContext(GlobalSetterContext);

  return (
    <header className={classnames({ dark_mode_element_bg: isDarkModeOn })}>
      <h2 className={classnames({ dark_mode_text: isDarkModeOn })}>
        Where in the world?
      </h2>
      <button
        className={classnames("dark_mode_btn", {
          dark_mode_text: isDarkModeOn,
        })}
        onClick={() => setIsDarkModeOn(!isDarkModeOn)}
      >
        Dark Mode
      </button>
    </header>
  );
};

export default Header;

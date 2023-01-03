import "./Header.css";
import classnames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import GlobalSetterContext from "../../context/GlobalSetterContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { isDarkModeOn } = useContext(GlobalContext);
  const { setIsDarkModeOn } = useContext(GlobalSetterContext);

  return (
    <header className={classnames({ dark_mode_element_bg: isDarkModeOn })}>
      <Link
        to="/countries"
        className={classnames({ dark_mode_text: isDarkModeOn })}
      >
        Where in the world?
      </Link>
      <button
        className={classnames("dark_mode_btn", {
          dark_mode_text: isDarkModeOn,
        })}
        onClick={() => setIsDarkModeOn(!isDarkModeOn)}
      >
        <FontAwesomeIcon icon={faMoon} />
        Dark Mode
      </button>
    </header>
  );
};

export default Header;

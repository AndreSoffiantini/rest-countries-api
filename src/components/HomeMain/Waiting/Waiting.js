import { useContext } from "react";
import classnames from "classnames";
import GlobalContext from "../../../context/GlobalContext";

import "./Waiting.css";

const Waiting = () => {
  const { isDarkModeOn } = useContext(GlobalContext);
  return (
    <div
      className={classnames("waiting_main", {
        dark_mode_bg: isDarkModeOn,
        dark_mode_text: isDarkModeOn,
      })}
    >
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Waiting;

import { useContext } from "react";
import classnames from "classnames";
import GlobalContext from "../../context/GlobalContext";

import "./Error.css";

const Error = () => {
  const { isDarkModeOn } = useContext(GlobalContext);
  return (
    <div
      className={classnames("error_main", {
        dark_mode_bg: isDarkModeOn,
        dark_mode_text: isDarkModeOn,
      })}
    >
      <h1>Error!</h1>
    </div>
  );
};

export default Error;

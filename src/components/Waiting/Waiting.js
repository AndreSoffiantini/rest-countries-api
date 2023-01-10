import { useContext } from "react";
import classnames from "classnames";
import GlobalContext from "../../context/GlobalContext";

import "./Waiting.css";
//import { useEffect } from "react";

const Waiting = () => {
  const { isDarkModeOn } = useContext(GlobalContext);
  //const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  /* useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaderVisible(true);
    }, 10);

    return clearTimeout(timeout);
  }, []); */

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

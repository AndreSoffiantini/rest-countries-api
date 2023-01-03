import "./FilterMenu.css";

import classnames from "classnames";

import { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FilterMenu = ({ data, setSelectedRegion }) => {
  const { isDarkModeOn } = useContext(GlobalContext);

  const regions = [...new Set(data.map((country) => country.region))].sort();

  return (
    <div className="dropdown">
      <div className="dropdown_title">
        <button
          className={classnames("dropbtn", {
            dark_mode_element_bg: isDarkModeOn,
            dark_mode_text: isDarkModeOn,
          })}
        >
          Filter by Region
        </button>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      <div
        className={classnames("dropdown-content", {
          dark_mode_element_bg: isDarkModeOn,
          dark_mode_text: isDarkModeOn,
        })}
      >
        {regions?.map((region) => {
          return (
            <p key={region} onClick={() => setSelectedRegion(region)}>
              {region}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default FilterMenu;

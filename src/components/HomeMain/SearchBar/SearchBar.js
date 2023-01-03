import "./SearchBar.css";
import classnames from "classnames";

import { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ setSearchInput }) => {
  const { isDarkModeOn } = useContext(GlobalContext);

  return (
    <div className="font_search_bar">
      <input
        className={classnames("search_bar", {
          dark_mode_element_bg: isDarkModeOn,
          dark_mode_text: isDarkModeOn,
        })}
        placeholder="Search for a country..."
        onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
      />
      <FontAwesomeIcon className="glass_icon" icon={faMagnifyingGlass} />
    </div>
  );
};

export default SearchBar;

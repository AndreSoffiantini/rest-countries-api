import "./SearchBar.css";
import classnames from "classnames";

import debounce from "lodash.debounce";

import { useContext, useMemo } from "react";
import GlobalContext from "../../../context/GlobalContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ setSearchInput }) => {
  const { isDarkModeOn } = useContext(GlobalContext);

  const changeHandler = (event) => {
    setSearchInput(event.target.value.toLowerCase());
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 500),
    []
  );

  return (
    <div className="font_search_bar">
      <input
        type="text"
        className={classnames("search_bar", {
          dark_mode_element_bg: isDarkModeOn,
          dark_mode_text: isDarkModeOn,
        })}
        placeholder="Search for a country..."
        onChange={debouncedChangeHandler}
      />
      <FontAwesomeIcon className="glass_icon" icon={faMagnifyingGlass} />
    </div>
  );
};

export default SearchBar;

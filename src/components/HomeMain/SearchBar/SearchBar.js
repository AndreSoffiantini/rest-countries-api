import "./SearchBar.css";
import classnames from "classnames";

/* import debounce from "lodash.debounce";
import { useMemo } from "react"; */

import { useContext, useState, useEffect } from "react";
import GlobalContext from "../../../context/GlobalContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ setDebounceInput }) => {
  const { isDarkModeOn } = useContext(GlobalContext);

  const [searchInput, setSearchInput] = useState("");

  // Debouncer for search input (using lodash)
  /* const changeHandler = (event) => {
    setSearchInput(event.target.value.toLowerCase());
  };

   const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 500),
    []
  ); */

  // Debouncer for search input (using useEffect)
  const changeHandler = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    const fn = setTimeout(() => {
      setDebounceInput(searchInput.toLowerCase());
    }, 500);

    return () => {
      clearTimeout(fn);
    };
  }, [searchInput, setDebounceInput]);

  return (
    <div className="font_search_bar">
      <input
        type="text"
        className={classnames("search_bar", {
          dark_mode_element_bg: isDarkModeOn,
          dark_mode_text: isDarkModeOn,
        })}
        placeholder="Search for a country..."
        onChange={changeHandler}
        value={searchInput}
      />
      <FontAwesomeIcon className="glass_icon" icon={faMagnifyingGlass} />
    </div>
  );
};

export default SearchBar;

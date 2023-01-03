import "./SearchBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ setSearchInput }) => {
  return (
    <div className="font_search_bar">
      <input
        className="search_bar"
        s
        placeholder="Search for a country..."
        onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
      />
      <FontAwesomeIcon className="glass_icon" icon={faMagnifyingGlass} />
    </div>
  );
};

export default SearchBar;

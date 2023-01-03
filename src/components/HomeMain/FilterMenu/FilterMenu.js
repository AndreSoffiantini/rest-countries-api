import "./FilterMenu.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FilterMenu = ({ data, setSelectedRegion }) => {
  const regions = [...new Set(data.map((country) => country.region))].sort();

  return (
    <div className="dropdown">
      <div className="dropdown_title">
        <button className="dropbtn">Filter by Region</button>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      <div className="dropdown-content">
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

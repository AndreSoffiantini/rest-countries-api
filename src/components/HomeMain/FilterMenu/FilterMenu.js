import "./FilterMenu.css";

const FilterMenu = ({ data, setSelectedRegion }) => {
  const regions = [...new Set(data.map((country) => country.region))].sort();

  return (
    <div className="dropdown">
      <button className="dropbtn">Dropdown</button>
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

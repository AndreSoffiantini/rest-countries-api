import "./HomeMain.css";
import classnames from "classnames";
import axios from "axios";

import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { useAsyncValue } from "react-router-dom";

import SearchBar from "./SearchBar/SearchBar";
import FilterMenu from "./FilterMenu/FilterMenu";
import CountriesSection from "./CountriesSection/CountriesSection";

const HomeMain = () => {
  const { isDarkModeOn } = useContext(GlobalContext);
  const { data } = useAsyncValue();

  const [searchInput, setSearchInput] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (selectedRegion) {
      const regionFilterData = (filteredData) => {
        setFilteredData(filteredData);
      };

      axios
        .get(`https://restcountries.com/v3.1/region/${selectedRegion}`)
        .then((res) => regionFilterData(res.data));
    }
  }, [selectedRegion]);

  const searchFilter = (data) => {
    return data.filter((country) =>
      country.name.common.toLowerCase().includes(searchInput)
    );
  };

  return (
    <main className={classnames("home_main", { dark_mode_bg: isDarkModeOn })}>
      <div className="filter_fields">
        <SearchBar setSearchInput={setSearchInput} />
        <FilterMenu data={data} setSelectedRegion={setSelectedRegion} />
      </div>
      <CountriesSection
        data={
          filteredData.length ? searchFilter(filteredData) : searchFilter(data)
        }
      />
    </main>
  );
};

export default HomeMain;

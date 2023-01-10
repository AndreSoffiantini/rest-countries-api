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

  //const [searchInput, setSearchInput] = useState("");
  const [debounceInput, setDebounceInput] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const searchFilter = (data) => {
    return data.filter(
      (country) =>
        country.name.common.toLowerCase().includes(debounceInput) ||
        country.name.official.toLowerCase().includes(debounceInput)
    );
  };

  // Filter cards by region
  useEffect(() => {
    if (selectedRegion) {
      const regionFilterData = (newFilteredData) => {
        setFilteredData(newFilteredData);
      };

      axios
        .get(`https://restcountries.com/v3.1/region/${selectedRegion}`)
        .then((res) => regionFilterData(res.data));
    }
  }, [selectedRegion]);

  return (
    <main className={classnames("home_main", { dark_mode_bg: isDarkModeOn })}>
      <div className="filter_fields">
        <SearchBar setDebounceInput={setDebounceInput} />
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

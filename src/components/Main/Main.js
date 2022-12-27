import "./Main.css";
import classnames from "classnames";

import { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { useAsyncValue } from "react-router-dom";

import SearchBar from "./SearchBar/SearchBar";
import FilterMenu from "./FilterMenu/FilterMenu";
import CountriesSection from "./CountriesSection/CountriesSection";

const Main = () => {
  const { isDarkModeOn } = useContext(GlobalContext);
  const { data } = useAsyncValue();
  const [searchInput, setSearchInput] = useState("");

  let showedCards = data.filter((country) =>
    country.name.common.toLowerCase().includes(searchInput)
  );

  return (
    <main className={classnames({ dark_mode_bg: isDarkModeOn })}>
      <div>
        <SearchBar setSearchInput={setSearchInput} />
        <FilterMenu />
      </div>
      <CountriesSection data={showedCards} />
    </main>
  );
};

export default Main;

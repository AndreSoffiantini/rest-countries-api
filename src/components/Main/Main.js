import "./Main.css";
import classnames from "classnames";

import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { useAsyncValue } from "react-router-dom";

import SearchBar from "./SearchBar/SearchBar";
import FilterMenu from "./FilterMenu/FilterMenu";
import CountriesSection from "./CountriesSection/CountriesSection";

const Main = () => {
  const { isDarkModeOn } = useContext(GlobalContext);
  const { data } = useAsyncValue();

  return (
    <main className={classnames({ dark_mode_bg: isDarkModeOn })}>
      <div>
        <SearchBar />
        <FilterMenu />
      </div>
      <CountriesSection data={data} />
    </main>
  );
};

export default Main;

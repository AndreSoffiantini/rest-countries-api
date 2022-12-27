import "./CountriesSection.css";
import { useSearchParams } from "react-router-dom";
import CountryCard from "./CountryCard/CountryCard";

const CountriesSection = (props) => {
  /* const [searchParams] = useSearchParams();
  console.log(searchParams); */

  return (
    <>
      <div className="countries_container">
        {props.data?.map((country) => {
          return <CountryCard country={country} key={country.name.common} />;
        })}
      </div>
    </>
  );
};

export default CountriesSection;

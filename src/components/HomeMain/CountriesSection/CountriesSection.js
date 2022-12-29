import "./CountriesSection.css";
import CountryCard from "./CountryCard/CountryCard";

const CountriesSection = (props) => {
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

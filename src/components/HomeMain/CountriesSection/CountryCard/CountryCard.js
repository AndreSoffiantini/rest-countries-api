import { Link } from "react-router-dom";
import "./CountryCard.css";

const CountryCard = ({ country }) => {
  return (
    <Link to={"/countries/" + country.name.common} className="country_card">
      <img
        src={country.flags.png}
        alt={country.name.common + " flag"}
        style={{ width: "100%" }}
      />
      <div className="container">
        <h3>
          <b>{country.name.common}</b>
        </h3>
        <p>Population: {country.population} </p>
        <p>Region: {country.region} </p>
        <p>Capital: {country.capital} </p>
      </div>
    </Link>
  );
};

export default CountryCard;

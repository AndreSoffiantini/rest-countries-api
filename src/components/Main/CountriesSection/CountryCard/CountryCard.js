import "./CountryCard.css";

const CountryCard = ({ country }) => {
  return (
    <div className="country_card">
      <img
        src={country.flags.png}
        alt={country.name.common + " flag"}
        style={{ width: "100%" }}
      />
      <div className="container">
        <h4>
          <b>{country.name.common}</b>
        </h4>
        <p>Population: {country.population} </p>
        <p>Region: {country.region} </p>
        <p>Capital: {country.capital} </p>
      </div>
    </div>
  );
};

export default CountryCard;

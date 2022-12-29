import { useAsyncValue } from "react-router-dom";
import { Link } from "react-router-dom";

const CountryMain = ({ countryCodes }) => {
  const { data } = useAsyncValue();
  //console.log(countryCodes);

  return (
    <>
      <Link to="/countries">Back</Link>
      <img
        src={data[0].flags.png}
        alt={data[0].name.common + " flag"}
        style={{ width: "100%" }}
      />
      <h1>{data[0].name.common}</h1>

      <ul>
        <li>
          Native Names:{" "}
          {Object.values(data[0].name.nativeName).map((name) => (
            <span key={name.common}>{name.common} </span>
          ))}
        </li>
        <li>Population: {data[0].population}</li>
        <li>Region: {data[0].region}</li>
        <li>Sub Region: {data[0].subregion}</li>
        <li>Capital: {data[0].capital} </li>
      </ul>

      <ul>
        <li>Top Level Domain: {data[0].tld}</li>
        <li>
          Currencies:{" "}
          {Object.values(data[0].currencies).map((currency) => (
            <span key={currency.name}>{currency.name} </span>
          ))}
        </li>
        <li>
          Languages:{" "}
          {Object.values(data[0].languages)
            .sort()
            .map((language) => (
              <span key={language}>{language} </span>
            ))}
        </li>
      </ul>

      <div>
        {data[0].borders ? (
          <>
            <span>Border Countries:</span>
            <ul className="border_countries_list">
              {countryCodes
                .filter((countryCode) =>
                  data[0].borders?.includes(countryCode.code)
                )
                .map((countryCode) => {
                  return (
                    <li key={countryCode.name} className="border_country_tag">
                      {countryCode.name}
                    </li>
                  );
                })}
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CountryMain;

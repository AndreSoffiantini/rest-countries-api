import { Link } from "react-router-dom";
import "./CountryCard.css";

import classnames from "classnames";
import { useContext } from "react";
import GlobalContext from "../../../../context/GlobalContext";

const CountryCard = ({ country }) => {
  const { isDarkModeOn } = useContext(GlobalContext);

  return (
    <Link
      to={"/countries/" + country.name.common}
      className={classnames("country_card", {
        dark_mode_element_bg: isDarkModeOn,
        dark_mode_text: isDarkModeOn,
      })}
    >
      <img
        src={country.flags.png}
        alt={country.name.common + " flag"}
        style={{ width: "100%" }}
      />
      <div className="container">
        <h3>
          <b>{country.name.common}</b>
        </h3>
        <p>
          <b>Population:</b>{" "}
          {new Intl.NumberFormat().format(country.population)}{" "}
        </p>
        <p>
          <b>Region:</b> {country.region}{" "}
        </p>
        <p>
          <b>Capital:</b> {country.capital}{" "}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;

import "./CountryMain.css";

import { useContext } from "react";
import { useAsyncValue } from "react-router-dom";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import classnames from "classnames";
import GlobalContext from "../../context/GlobalContext";

const CountryMain = ({ countryCodes }) => {
  const { data } = useAsyncValue();
  //console.log(countryCodes);

  const { isDarkModeOn } = useContext(GlobalContext);

  const NAobject = { value: "N.A." };

  return (
    <main
      className={classnames("country_main", {
        dark_mode_bg: isDarkModeOn,
        dark_mode_text: isDarkModeOn,
      })}
    >
      <Link to="/countries">
        <button
          className={classnames("back_btn", {
            dark_mode_element_bg: isDarkModeOn,
            dark_mode_text: isDarkModeOn,
          })}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ marginRight: "0.5rem" }}
          />
          <span>Back</span>
        </button>
      </Link>

      <div className="country_details_container">
        <div className="country_details_col_left">
          <img
            src={data[0].flags.png}
            alt={data[0].name.common + " flag"}
            style={{ width: "100%" }}
          />
        </div>

        <div className="country_details_col_right">
          <h2>{data[0].name.common}</h2>

          <div className="details_lists_container">
            <ul>
              <li>
                <b>Native Names:</b>{" "}
                {Object.values(data[0].name.nativeName || NAobject).map(
                  (name) => (
                    <span key={name.common}>
                      {name.common || "N.A."}
                      {Object.values(
                        data[0].name.nativeName || NAobject
                      ).lastIndexOf(name) ===
                      Object.values(data[0].name.nativeName || NAobject)
                        .length -
                        1
                        ? ""
                        : ", "}
                    </span>
                  )
                )}
              </li>
              <li>
                <b>Population:</b>{" "}
                {new Intl.NumberFormat().format(data[0].population)}
              </li>
              <li>
                <b>Region:</b> {data[0].region}
              </li>
              <li>
                <b>Sub Region:</b> {data[0].subregion || "N.A."}
              </li>
              <li>
                <b>Capital:</b> {data[0].capital || "N.A."}{" "}
              </li>
            </ul>

            <ul>
              <li>
                <b>Top Level Domain:</b> {data[0].tld || "N.A."}
              </li>
              <li>
                <b>Currencies:</b>{" "}
                {Object.values(data[0].currencies || NAobject).map(
                  (currency) => (
                    <span key={currency.name}>
                      {currency.name || "N.A."}
                      {Object.values(
                        data[0].currencies || NAobject
                      ).lastIndexOf(currency) ===
                      Object.values(data[0].currencies || NAobject).length - 1
                        ? ""
                        : ", "}
                    </span>
                  )
                )}
              </li>
              <li>
                <b>Languages:</b>{" "}
                {Object.values(data[0].languages || NAobject)
                  .sort()
                  .map((language) => (
                    <span key={language}>
                      {language || "N.A."}
                      {Object.values(data[0].languages || NAobject)
                        .sort()
                        .lastIndexOf(language) ===
                      Object.values(data[0].languages || NAobject).length - 1
                        ? ""
                        : ", "}
                    </span>
                  ))}
              </li>
            </ul>
          </div>

          <div className="border_countries_container">
            {data[0].borders ? (
              <>
                <h4>Border Countries:</h4>
                <ul
                  className="border_countries_list"
                  style={{ marginTop: "0.5rem" }}
                >
                  {countryCodes
                    .filter((countryCode) =>
                      data[0].borders?.includes(countryCode.code)
                    )
                    .sort((a, b) => {
                      const nameA = a.name.toUpperCase();
                      const nameB = b.name.toUpperCase();
                      if (nameA < nameB) {
                        return -1;
                      }
                      if (nameA > nameB) {
                        return 1;
                      }
                      return 0;
                    })
                    .map((countryCode) => {
                      return (
                        <li
                          key={countryCode.name}
                          className={classnames("border_country_tag", {
                            dark_mode_element_bg: isDarkModeOn,
                          })}
                        >
                          <Link
                            to={"/countries/" + countryCode.name}
                            className={classnames({
                              dark_mode_text: isDarkModeOn,
                            })}
                          >
                            {countryCode.name}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryMain;

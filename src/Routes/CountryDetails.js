import axios from "axios";

import { Suspense, useEffect, useState } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Waiting from "../components/HomeMain/Waiting/Waiting";
import CountryMain from "../components/CountryMain/CountryMain";

const CountryDetails = () => {
  const { response } = useLoaderData();
  const [countryCodes, setCountryCodes] = useState([]);

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const resp = await axios.get("https://restcountries.com/v3.1/all");
        setCountryCodes(
          resp.data.map((country) => {
            return { name: country.name.common, code: country.cca3 };
          })
        );
      } catch (err) {
        console.error(err);
      }
    };

    sendGetRequest();
  }, []);

  //console.log(countryCodes);

  return (
    <>
      <Suspense fallback={<Waiting />}>
        <Await resolve={response} errorElement={<div>Error!</div>}>
          <CountryMain countryCodes={countryCodes} />
        </Await>
      </Suspense>
    </>
  );
};

export default CountryDetails;

import { Link } from "react-router-dom";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Waiting from "../../components/Main/Waiting/Waiting";
import CountryMain from "../../components/CountryMain/CountryMain";

const CountryDetails = () => {
  const { response } = useLoaderData();

  return (
    <>
      <Suspense fallback={<Waiting />}>
        <Await resolve={response} errorElement={<div>Error!</div>}>
          <CountryMain />
        </Await>
      </Suspense>
    </>
  );
};

export default CountryDetails;

import "../App.css";

import HomeMain from "../components/HomeMain/HomeMain";

import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Waiting from "../components/Waiting/Waiting";
import Error from "../components/Error/Error";

const Home = () => {
  const { response } = useLoaderData();

  return (
    <>
      <Suspense fallback={<Waiting />}>
        <Await resolve={response} errorElement={<Error />}>
          <HomeMain />
        </Await>
      </Suspense>
    </>
  );
};

export default Home;

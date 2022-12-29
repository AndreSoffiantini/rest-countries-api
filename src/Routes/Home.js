import "../App.css";

import HomeMain from "../components/HomeMain/HomeMain";

import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Waiting from "../components/HomeMain/Waiting/Waiting";

const Home = () => {
  const { response } = useLoaderData();

  return (
    <>
      <Suspense fallback={<Waiting />}>
        <Await resolve={response} errorElement={<div>Error!</div>}>
          <HomeMain />
        </Await>
      </Suspense>
    </>
  );
};

export default Home;

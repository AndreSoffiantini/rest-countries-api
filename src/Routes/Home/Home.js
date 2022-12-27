import "../../App.css";

import Main from "../../components/Main/Main";

import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Waiting from "../../components/Main/Waiting/Waiting";

const Home = () => {
  const { response } = useLoaderData();

  return (
    <>
      <Suspense fallback={<Waiting />}>
        <Await resolve={response} errorElement={<div>Error!</div>}>
          <Main />
        </Await>
      </Suspense>
    </>
  );
};

export default Home;

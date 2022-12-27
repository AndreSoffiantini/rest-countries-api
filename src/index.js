import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  defer,
} from "react-router-dom";
import Home from "./Routes/Home/Home";
import Layout from "./Routes/Layout/Layout";

/* const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="countries" element={<Home />} />
      <Route path="countries/:name" element={<Home />} />
    </Route>
  )
); */

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => {
          const response = axios.get("https://restcountries.com/v3.1/all");
          console.log(response);
          return defer({ response });
        },
      },
      {
        path: "/countries",
        element: <Home />,
        loader: () => {
          const response = axios.get("https://restcountries.com/v3.1/all");
          console.log(response);
          return defer({ response });
        },
        /* async ({ params, request }) => {
          const data = await fetch("https://restcountries.com/v3.1/all");
          console.log(data);
          const json = await data.json();
          return defer({ json }); */
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

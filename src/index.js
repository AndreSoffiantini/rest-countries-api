import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { RouterProvider, createBrowserRouter, defer } from "react-router-dom";
import Home from "./Routes/Home";
import Layout from "./Routes/Layout";
import CountryDetails from "./Routes/CountryDetails";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => {
          const response = axios.get("https://restcountries.com/v3.1/all");
          //console.log(response);
          return defer({ response });
        },
      },
      {
        path: "/countries",
        element: <Home />,
        loader: () => {
          const response = axios.get("https://restcountries.com/v3.1/all");
          //console.log(response);
          return defer({ response });
        },
      },
      {
        path: "/countries/:name",
        element: <CountryDetails />,
        loader: ({ params: { name } }) => {
          const response = axios.get(
            `https://restcountries.com/v3.1/name/${name}`
          );
          //console.log(response);
          return defer({ response });
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

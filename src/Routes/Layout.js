import "../App.css";

import GlobalProvider from "../context/GlobalProvider";
import Header from "../components/Header/Header";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <GlobalProvider>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </GlobalProvider>
    </>
  );
};

export default Layout;

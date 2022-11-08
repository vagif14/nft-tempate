// import 'swiper/swiper.min.css';
import { React, useEffect } from "react";
import "./assets/icons/font-awesome.css";
import "./assets/scss/App.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";

import { Route, Routes } from "react-router-dom";

import routes from "./pages/index";
import Layouts from "./layouts";

//login fuction with metamask
const login = async () => {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    return account;
  } catch (err) {
    console.log(err);
  }
};

// logout with metamask
const logout = async () => {
  try {
    await window.ethereum.request({
      method: "wallet_requestPermissions",
      params: [{ eth_accounts: {} }],
    });
  } catch (err) {
    console.log(err);
  }
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <button onClick={async () => console.log(await login())}>
        Login with metamask
      </button>
      <button onClick={async () => console.log(await logout())}>
        Logout with metamask
      </button>
      {/* <Routes>
        <Route element={<Layouts />}>
          {routes.map((data, index) => (
            <Route
              exact={true}
              path={data.path}
              element={data.component}
              key={index}
            />
          ))}
        </Route> */}
      {/* </Routes> */}
    </>
  );
}

export default App;

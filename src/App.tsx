import React, { useEffect } from "react";
import "./App.css";
import { Route, BrowserRouter, Navigate, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import HomePage from "./screens/home/HomePage";
import Header from "./components/header/Header";
import Footer from "./screens/home/footer/Footer";
import MethodsPage from "./screens/methods/MethodsPage";
import { setCountries } from "./store/actions/main-action";

function App() {
  const dispatch = useDispatch();
  const func: any = async () => {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://sport.pog-arm.org/public/get/countris/",
      {
        headers: {
          "Access-Control-Allow-Headers":
            "X-Requested-With, base64:5u8jTwIheLv+v3oHAit+WbRgorLhTjkXWrfdWaKmCt8=",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        method: "GET",
      }
    );
    const coutries = await response.json();
    dispatch(setCountries(coutries[0]));
  };
  useEffect(() => {
    func();
  }, []);
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} Component={() => <Navigate to={"/home"} />} />
          <Route path={"/home"} Component={() => <HomePage />} />
          <Route path={"/methods"} Component={() => <MethodsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import Header from "./Header";
import Home from "./Home/Home";
import Footer from "./Footer";
import Login from "./Login/Login";
import { GlobalUser } from "./globalContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalUser>
          <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/authenticate/*" element={<Login />} />
          </Routes>
          <Footer />
          </div>
        </GlobalUser>
      </BrowserRouter>
    </>
  );
}

export default App;

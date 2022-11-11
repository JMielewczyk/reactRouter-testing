import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/Header.css";

import img1 from "../images/avenue.jpg";
import img2 from "../images/highway.jpg";
import img3 from "../images/railroad.jpg";
import img4 from "../images/road.jpg";

const Header = () => {
  return (
    <header>
      <Routes>
        <Route
          path="/"
          element={<img className="headerImage" src={img1} alt="road"></img>}
        />
        <Route
          path="/products"
          element={<img className="headerImage" src={img2} alt="road"></img>}
        />
        <Route
          path="/contact"
          element={<img className="headerImage" src={img3} alt="road"></img>}
        />
        <Route
          path="/admin"
          element={<img className="headerImage" src={img4} alt="road"></img>}
        />
        <Route
          path="*"
          element={<img className="headerImage" src={img1} alt="road"></img>}
        />
      </Routes>
    </header>
  );
};

export default Header;

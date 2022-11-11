import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  function handlePageName(path) {
    if (path === "/") {
      return <span>stronie głównej</span>;
    } else {
      return path
    }
  }
  return (
    <section className="footer">
      <div className="footer-inside-wrapper">
        <p>Dodatkowe informacje</p>
        <p>Jesteś na {handlePageName(useLocation().pathname)}</p>
      </div>
    </section>
  );
}

export default Footer;

import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import Nav from "./Nav.js";
import StartPage from "../pages/StartPage.js";
import Products from "../pages/ProductsList.js";
import Contact from "../pages/Contact.js";
import AdminPanel from "../pages/AdminPanel.js";
import ProductPage from "../pages/ProductPage.js";
import ErrorPage from "../pages/ErrorPage.js";
import Footer from "./Footer.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <section className="main">
            <aside>
              <Nav />
            </aside>
            <section className="pages">
              <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </section>
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

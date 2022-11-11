import React from "react";
import { Link, useParams } from "react-router-dom";
import Product from "./Product";
import "../styles/ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="productPage">
      <div>Strona produktu</div>
      <Product id={id} />
      <Link to="/products">Powrót do listy produktów</Link>
    </div>
  );
};

export default ProductPage;

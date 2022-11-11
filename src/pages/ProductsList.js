import React from "react";
import { Link } from "react-router-dom";

const listOfProducts = [
  {
    className: "products-item",
    link: "/products/car",
    product: "car",
  },
  {
    className: "products-item",
    link: "/products/bike",
    product: "bike",
  },
  {
    className: "products-item",
    link: "/products/motorcycle",
    product: "motorcycle",
  },
  {
    className: "products-item",
    link: "/products/flowers",
    product: "flowers",
  },
];

const Products = () => {
  const products = listOfProducts.map((item) => (
    <Link
      key={item.product}
      className={item.className}
      to={`/products/${item.product}`}
    >
      {item.product}
    </Link>
  ));
  return (
    <div>
      <h1>Zobacz nasze produkty w promocji!!!</h1>
      <ul className="products-wrapper">{products}</ul>
    </div>
  );
};

export default Products;

// ProductList.js
import React, { useState, useEffect } from "react";
import "./ProductsList.css";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
    console.log("products", products);
  });

  return (
    <>
      <div className="product-list-container">
        <h1 className="page-header">EliteCart</h1>
        <div className="product-list">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} className="nostyle-link">
              <div key={product.id} className="product-card">
                <img src={product.images[0]} alt="not found" />
                <h3>{product.title}</h3>
                <p>price : {product.price} ₹</p>
                <p>rating: {product.rating}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;

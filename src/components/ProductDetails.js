import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/data/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <div>
      <h1 className="page-header">EliteCart</h1>
      <div className="product-detail-container">
        <div className='product-detail'>
          <img src={product.images[0]} alt="not found" />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className='product-detail-price'>Price: {product.price} $</p><br></br>
          <p className='product-detail-price'>rating: {product.rating}</p><br></br>
          <button type='button' name='button' className='button'>Add to cart</button><br></br><br></br>
          <button type='button' name='button' className='button'>Buy now</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetail;

// Product.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Product() {
  const [product, setProduct] = useState({});
  const productId = useParams().productId;

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [productId]);

  return (
    <div className="container border shadow rounded my-5 ">
      <div className="row">
        <div className="col-md-12">
          <h2 className="fs-5 p-2 ">{product.title}</h2>
          <p>{product.description}</p>
          <p className="fs-5">Price: ${product.price}</p>
          <img width={200} src={product.image} class="rounded mx-auto d-block" alt={product.title}></img>
        </div>
      </div>
    </div>
  );
}

export default Product;

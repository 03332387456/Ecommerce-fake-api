// Cards.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,

} from "react-router-dom";
import axios from "axios";
import Product from "./Product";

function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);



  return (
    <Router>
     <div className="container text-center">
          <ul className="row list-group">
            {products.map((product) => (
              <li 
                className="list-group-item  w-50 container p-2 m-2 border"
                key={product.id}
              >
                <Link
                  to={`/product/${product.id}`}
                >
                  {product.title}
                  <img width={100} src={product.image} class="rounded mx-auto d-block" alt={product.title}></img>
                </Link>

              </li>
            ))}
          </ul>
        </div>

        <Routes>
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      
    </Router>
  );
}

export default Cards;














// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useParams,} from 'react-router-dom';
// import axios from 'axios';

// function Cards() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get('https://fakestoreapi.com/products')
//       .then((response) => setProducts(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <Router>
//       <div>
//         <h1 className='text-center'><i>Products</i></h1>
//         <div className='container'>
//           <ul className='row list-group'>
//             {products.map((product) => (
//                 <p> <i>
//               <li className='list-group-item container p-2 m-2 border' key={product.id}>
//                 <Link className='text-decoration-none text-dark' to={`/product/${product.id}`}>{product.title}</Link>
//               </li>
//                 </i>
//                 </p>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <Routes>
//       <Route path="/product/:productId" element={<Details />} />
//       </Routes>
//     </Router>
//   );
// }

// function Details() {
//   const [product, setProduct] = useState({});
//   const { productId } = useParams();

//   useEffect(() => {
//     axios
//       .get(`https://fakestoreapi.com/products/${productId}`)
//       .then((response) => setProduct(response.data))
//       .catch((error) => console.error(error));
//   }, [productId]);

//   return (
//     <div className='container border shadow rounded my-5 text-center'>
//       <div className='row'>
//         <div className='col-md-12'>
//           <h2 className='fs-5 p-2'><i>{product.title}</i></h2>
//           <p><i>{product.description}</i></p>
//           <img className='border p-2' width="300px" src={product.image} alt={product.title} />
//           <p className='fs-5'><i>Price: ${product.price}</i></p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;

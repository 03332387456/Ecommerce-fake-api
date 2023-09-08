import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cards from './Cards';

export default function Header() {
  return (

    <div className='img_1'>
      <Navbar expand="lg" className="bg-body-tertiary sticky-top">
        <Container>
          <Navbar.Brand href="/home">
            <p className=''>
              <ShoppingCartIcon /> <span><i>Shopping</i></span>
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container text-center">

        <h1><i>Welcome to Our Online Store</i></h1>
        <p>
          <i>
            Discover a world of products at your fingertips! At [Shopping], we offer an extensive range of high-quality goods to meet all your needs. Whether you're looking for the latest fashion trends, cutting-edge electronics, or household essentials, we've got you covered.
          </i>
        </p>
        <p>
          <i>
            Shop with confidence knowing that we source our products from trusted suppliers to ensure you receive the best value for your money. With secure and convenient online shopping, we make it easy for you to find what you want and have it delivered to your doorstep.
          </i>
        </p>
        <p>
          <i>
            Explore our categories and discover amazing deals and discounts every day. Our user-friendly website and efficient search features make it simple to find the products you desire. Join our community of satisfied customers and experience the joy of hassle-free online shopping.
          </i>
        </p>
        <p>
          <i>
            Start browsing now and find your next favorite item. Thank you for choosing [Shopping], where quality and convenience meet!
          </i>
        </p>
      </div>
      <Cards />
    </div>

  )
}

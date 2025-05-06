import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container'
import { Button } from "react-bootstrap"; 
const products = [
  { id: 1, name: 'Laptop', price: 800 },
  { id: 2, name: 'Phone', price: 400 },
  { id: 3, name: 'Headphones', price: 100 },
  { id: 4, name: 'Books', price: 200 },
];

function Cart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Container>
      <h1>Products</h1>
      <Row> 
        {products.map(product => (
      <Col  md={3} className="product-list" key={product.id}>
       
          <div className="product">
            <div>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </div>
        
      </Col>
      ))}
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
      </Row>
    </Container>
  );
}

export default Cart;


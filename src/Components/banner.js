import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Slider from "../assets/images/wordlist-4.jpg";
import OwlCarousel from './OwlCarousel';


export default function banner() {
  return (
    <div className="bnr-sec">
   <Container>
    <Row>
    <Col lg={8}>
    <h1><span>Find Awesome Deals</span>in Australia</h1>
    <p></p>
     <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <h4>E.g. Beverages, Pizzas, Chinese, Bakery, Indian...</h4>

          {/**--------owl-carousel-----------**/}
          <OwlCarousel/>
          {/**--------owl-carousel-----------**/}
          </Col>
          <Col lg={4}>
          <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider} 
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider}
          alt="Second slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider} 
          alt="Third slide"
        />
    
      </Carousel.Item>
    </Carousel>
          </Col>
          </Row>
   </Container>
   </div>
  )
}

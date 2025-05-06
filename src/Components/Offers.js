import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container'
import S1 from "../assets/images/wordlist-4.jpg"

export default function Offers() {
  return (
    <div className='offers-sec'>
      <Container>
      <h2 className="text-center my-4">Popular Brands</h2>
          <Row>
              <Col xs={3}><img src={S1}/></Col>
              <Col xs={3}><img src={S1}/></Col>
              <Col xs={3}><img src={S1}/></Col>
              <Col xs={3}><img src={S1}/></Col>
          </Row>
      </Container>
    </div>
  )
}

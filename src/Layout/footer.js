import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Item({name, isPacked}){
  return<li className='item'>{name}</li>;
}

export default function PackingList() {
  return (
    <section className="footer">
      <Container>
      <Row>
        <Col>
        <h4>About </h4>
        <ul>
          <Item 
            isPacked={true} 
            name="About Us" 
          />
          <Item 
            isPacked={true} 
            name="Culture" 
          />
          <Item 
            isPacked={false} 
            name="Blog" 
          />
          <Item 
            isPacked={true} 
            name="Careers" 
          />
          <Item 
            isPacked={true} 
            name="Contact" 
          />
        
        </ul>
        </Col>

        <Col>
        <h4>About </h4>
        <ul>
          <Item 
            isPacked={true} 
            name="Community" 
          />
          <Item 
            isPacked={true} 
            name="Developers" 
          />
          <Item 
            isPacked={true} 
            name="Blogger Help" 
          />
          <Item 
            isPacked={true} 
            name="Verified Users" 
          />
          <Item 
            isPacked={true} 
            name="Code of Conduct" 
          />
        </ul>
        </Col>
        
        <Col>
        <h4>About </h4>
        <ul>
          <Item 
            isPacked={true} 
            name="Community" 
          />
          <Item 
            isPacked={true} 
            name="Developers" 
          />
          <Item 
            isPacked={false} 
            name="Blogger Help" 
          />
        </ul>
        </Col>

        <Col>
        <ul>
        <h4>About </h4>
          <Item 
            isPacked={true} 
            name="Advertise" 
          />
          <Item 
            isPacked={true} 
            name="Add a Restaurant" 
          />
        <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
        </ul>
        </Col>

        <Col>
        <h4>About </h4>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf"  
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
        </Col>
      </Row>
    </Container>
  </section>
  )
}




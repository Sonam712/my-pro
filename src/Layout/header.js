import React from 'react'
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
   
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">LOGO HERE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Offers</Nav.Link>
            <NavDropdown title="Restaurants" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Listing </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               Details
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               Checkout
              </NavDropdown.Item>
              {/**<NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Checkout
              </NavDropdown.Item>***/}
            </NavDropdown>
            <Nav.Link href="#" disabled>
              My Account
            </Nav.Link>
          
            <Nav.Link href="#">
              Cart
            </Nav.Link>
            </Nav>
          {/**<Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>**/}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
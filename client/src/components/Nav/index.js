import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

function Navigation() {
  return (

<Navbar>
  <Container>
  <Navbar.Brand className="text-primary">Google Book Search</Navbar.Brand>
  <div className="d-flex flex-row-reverse">
  <Nav.Item>
    <Nav.Link href="/saved">Saved</Nav.Link>
  </Nav.Item>
  <Nav.Item >
    <Nav.Link href="/">Search</Nav.Link>
  </Nav.Item>
  </div>
  </Container>
</Navbar>

  );
}

export default Navigation;

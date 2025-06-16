// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';

function Navbar() {
  return (
    <BsNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BsNavbar.Brand as={Link} to="/">McIvor Saint-Maxens Portfolio</BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;

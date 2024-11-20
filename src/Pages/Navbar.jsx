import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'; // Import react-bootstrap components
import './Navbar.css';  // Ensure the CSS file is imported

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Navbar Brand (Logo or Website name) */}
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>

        {/* Navbar Toggler for mobile screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* About Link */}
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {/* Education Link */}
            <Nav.Link as={Link} to="/education">Education</Nav.Link>
            {/* Hobbies Link */}
            <Nav.Link as={Link} to="/hobbies">Hobbies</Nav.Link>
            {/* Contact Link */}
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap'; // Import react-bootstrap components
import './Navbar.css';  // Ensure the CSS file is imported

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);  // State to track if the navbar is open or closed

  const toggleNavbar = () => {
    setIsOpen(!isOpen);  // Toggle the navbar state when clicked
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Navbar Brand (Logo or Website name) */}
        <Navbar.Brand as={Link} to="/" className={isOpen ? 'home-link-hidden' : ''}>
          My Fortfolio
        </Navbar.Brand>

        {/* Navbar Toggler for mobile screens */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleNavbar}
          className={isOpen ? 'open' : ''}
        />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
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

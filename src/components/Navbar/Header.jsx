import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <Navbar expand="lg" className="bg-body-dark">
    <Container>
   
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as ={Link} to="/">Home</Nav.Link>
          <Nav.Link as ={Link} to="/about">About</Nav.Link>
          <Nav.Link as ={Link} to="/services">Services</Nav.Link>
          <Nav.Link as ={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as ={Link} to="/contact">Contact</Nav.Link>
          
          
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
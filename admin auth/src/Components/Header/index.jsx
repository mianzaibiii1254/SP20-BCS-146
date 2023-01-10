import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from "react-bootstrap";
function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <li className='Menu '><Link className='MenuText' to="/signin">Signin</Link></li>
            <li className='Menu'><Link className='MenuText' to="/signup">Signup</Link></li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    );
}

export default Header;
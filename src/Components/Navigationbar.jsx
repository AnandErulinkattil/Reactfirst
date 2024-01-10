import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Assets/Logo.jpg'
import './Navigationbar.css';

export default function Navigationbar() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="bg-dark"data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#Home">
          <img src={Logo} alt="" className='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"className="justify-content-end">
          <Nav className="me-3 py-3 ">
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Packages">Packages</Nav.Link>
            <Nav.Link href="#Register">Join Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

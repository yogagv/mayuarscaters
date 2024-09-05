import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPhone } from "react-icons/fa6";
import logo from '../../assets/images/mayuras catering.png'
import './header.css'
const Header = () => {


  return (
    <>
    <Navbar expand="lg" className="nav">
          <Container>
            <Navbar.Brand>
              <Nav.Link as={Link} to="/">
                <img src={logo} alt="logo" className='mayuralogo'/>
                </Nav.Link>
                </Navbar.Brand>
                <Nav.Link as={Link} to="/" className='navtext'>
                <h4 className='logotext'>Mayuras' <span><h6 className='logodesc'>Events & Caters</h6></span></h4>
                </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto navmenu">
                <Nav.Link as={Link} to="/" className='navlist'>
                Home
                </Nav.Link>
                <Nav.Link as={Link} to="/#about" className='navlist'>
                About us
                </Nav.Link>
                <Nav.Link as={Link} to="/services" className='navlist'>
                Services
                </Nav.Link>
                <Nav.Link as={Link} to="/events" className='navlist'>
                Events
                </Nav.Link>
                <Nav.Link as={Link} to="/testimonials" className='navlist'>
                Testimonials
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className='navlist'>
                Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="row">
            <div className="col-md-6 icon">
                <FaPhone className='mt-3'/> 
                 <span className='ms-2 phone text-bold'>+91 8248181141 <br /> +91 8072880531 <br /> +91 8754656185</span>
            </div>
            </div>
          </Container>
        </Navbar>
    </>
  )
}

export default Header
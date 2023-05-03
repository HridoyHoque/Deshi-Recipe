import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Deshi Recipe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-3">
            <Link to='/' className='text-decoration-none'>Home</Link>
            <Link to='/blog' className='text-decoration-none'>Blog</Link>
          </Nav>

          <Link to='/login'><Button>Login</Button></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;
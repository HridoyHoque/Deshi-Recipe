import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link to='/' className='text-decoration-none fw-bold'> <span>Deshi</span> Recipe</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-3">
            <Link to='/' className='text-decoration-none text-black'>Home</Link>
            <Link to='/blog' className='text-decoration-none text-black'>Blog</Link>
            <Link to='/' className='text-decoration-none text-black'>Order</Link>
          </Nav>

          <Link to='/login'><Button>Login</Button></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white p-5">
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <h5>Deshi Recipe</h5>
            <p>We are providing best food all over the Bangladesh.</p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li> +1 123 456 7890</li>
              <li>info@yourwebsite.com</li>
              <li>123 Main Street, Dhaka Mirpur</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <p>&copy; 2023 Your Website Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    );
};

export default Footer;
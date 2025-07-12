import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6} className="mb-4">
            <h1 style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
              Welcome to SkillSwap!
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              A smart way to exchange skills with people in your community. 
              Offer what you know, and get what you want — no money involved!
            </p>
            <div className="d-flex gap-2 mt-4">
              <Button variant="primary" as={Link} to="/signup">
                Get Started
              </Button>
              <Button variant="outline-primary" as={Link} to="/browse">
                Browse Skills
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4149/4149680.png"
              alt="Skill Sharing"
              className="img-fluid"
              style={{ maxHeight: '350px' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

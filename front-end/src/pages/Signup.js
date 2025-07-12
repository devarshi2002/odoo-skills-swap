import { Container, Form, Button } from 'react-bootstrap';

function Signup() {
  return (
    <Container className="mt-4" style={{ maxWidth: '400px' }}>
      <h3 className="text-center">Signup</h3>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mt-2">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

         <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Enter phone number" />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-2">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>

        <Form.Group controlId="formConPass">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="text" placeholder="Confirm Password" />
        </Form.Group>       
        <Button className="mt-3 w-100" variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;

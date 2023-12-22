import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    console.log('login user function issue');
    setAuthenticate(true);
    navigate('/');
  }; // form 태그를 사용할땐 e.preventDefault()를 사용하면 계속 refresh 되는 것을 막을 수 있다. 반드시 사용!
  return (
    <Container>
      <Form
        className="login-container"
        onSubmit={(event) => loginUser(event)}
      >
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            type="checkbox"
            label="Check me out"
          />
        </Form.Group>
        <Button
          variant="danger"
          type="submit"
        >
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

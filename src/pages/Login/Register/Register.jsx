import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='mx-auto'>
            <Form className='mx-auto w-25'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='naem' required placeholder="Enter name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept Terms And Condition" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button> <br />
                <Form.Text>
                    Already have an Account? <Link to='/register'>Login</Link>

                </Form.Text>
            </Form>
            <Form.Text className="text-muted">

            </Form.Text>
        </Container>
    );
};

export default Register;
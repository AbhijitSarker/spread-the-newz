import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [accept, setAccept] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleAccept = (event) => {
        setAccept(event.target.checked)
    }


    return (
        <Container className='mx-auto'>
            <Form onSubmit={handleRegister} className='mx-auto w-25'>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' required placeholder="Enter name" />

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
                    <Form.Check onClick={handleAccept} type="checkbox" name='accept' required label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>} />
                </Form.Group>
                <Button disabled={!accept} variant="primary" type="submit">
                    Register
                </Button> <br />
                <Form.Text>
                    Already have an Account? <Link to='/login'>Login</Link>

                </Form.Text>
            </Form>
            <Form.Text className="text-muted">

            </Form.Text>
        </Container>
    );
};

export default Register;
import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthPovider/AuthProvider';


const Login = () => {
    const navigate = useNavigate()
    const { logIn } = useContext(AuthContext)
    const location = useLocation()
    const from = location.state?.from?.pathname || "/categorey/0"
    const logInHandaler = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div className="  w-25 mx-auto mt-4">

            <Form onSubmit={logInHandaler}>
                <h4>Plase Log In</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder="Password" name='password' />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>If You first time here <Link to='/registration'>Sing In </Link>first</p>
        </div>
    );
};

export default Login;
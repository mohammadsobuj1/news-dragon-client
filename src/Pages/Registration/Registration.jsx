import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthPovider/AuthProvider';


const Registration = () => {
    const { singIn } = useContext(AuthContext)
    const [accept, setAccept] = useState(false)
    const registerHandel = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        singIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    const checkHandaler = event => {
        setAccept(event.target.checked)
      
    }


    return (
        <div className="  w-25 mx-auto mt-4">
            <Form onSubmit={registerHandel}>
                <h4>Plase Register</h4>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" name='name' />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="photo" placeholder="Enter photo" name='photo' />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder="Password" name='password' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={checkHandaler} type="checkbox" label="Check me out" name='check' />
                </Form.Group>

                <Button  variant="primary" disabled={!accept} type="submit">
                    Submit
                </Button>
            </Form>

            <p>Go to <Link to='/login'>Log In </Link>Here</p>
        </div>
    );
};

export default Registration;
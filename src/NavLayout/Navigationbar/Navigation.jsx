import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthPovider/AuthProvider';


const Navigation = () => {
    const { user, logOut } = useContext(AuthContext)
    const handalLogout=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#features"><Link to="/categorey/0">Home</Link></Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                    </Nav>
                    <Nav>


            {
                user ?   <Link>   <Button onClick={handalLogout} variant="secondary">Log Out</Button></Link> :
                   <Link to="/login"> <Button variant="secondary">Log in</Button></Link>
            }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
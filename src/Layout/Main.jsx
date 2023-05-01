import React from 'react';
import Header from '../Pages/Sheard/Header/Header';
import Footer from '../Pages/Sheard/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNave from '../Pages/Sheard/leftNav/LeftNave';
import RightNave from '../Pages/Sheard/RightNave/RightNave';
import { Outlet } from 'react-router-dom';
import Navigation from '../NavLayout/Navigationbar/Navigation';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navigation></Navigation>
            <Container>

                <Row>
                    <Col lg={3}>
                        <LeftNave></LeftNave>
                    </Col>
                    <Col lg={6}>
                      <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNave></RightNave>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;
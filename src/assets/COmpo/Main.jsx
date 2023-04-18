import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from './Navbar/LeftNav';
import RightNav from './Navbar/RightNav';
import Footer from './Footer';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}><LeftNav></LeftNav></Col>
                    <Col lg={6}> <h2>Main content Comming....</h2></Col>
                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;
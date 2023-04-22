import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from './Navbar/RightNav';
import Footer from './Footer';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    
                    <Col lg={9}> <Outlet></Outlet></Col>
                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default NewsLayout;
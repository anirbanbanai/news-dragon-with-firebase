import React from 'react';
import logo from '..//../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { FaTripadvisor } from "react-icons/fa";

const Header = () => {
    return (
        <Container className='mt-4'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <h4 className='text-danger'>Journalism Without Fear or Favor</h4>
                <p>{moment().format(`dddd, MMMM Do YYYY,DDDo ,hh : mm : ss`)}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-secondary fs-4' speed={90}>
                    I can be a React component, multiple React components, or just some text...... I can be a React component, multiple React components, or just some text.     
                </Marquee>
            </div>
            <div>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Nav className="mx-auto m-2 ">
                           <Link className=' m-2 text-decoration-none'><h3>Home</h3></Link>
                           <Link className='m-2 text-decoration-none'><h3>About</h3></Link>
                           <Link className='m-2 text-decoration-none'><h3>Contact</h3></Link>
                        </Nav>
                        <Nav>
                            <h4 className='m-3'><FaTripadvisor/> </h4>
                        <Button variant="warning">Warning</Button>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;
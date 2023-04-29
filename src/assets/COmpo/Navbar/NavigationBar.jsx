import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

const NavigationBar = () => {
    return (
       <Container>
         <Navbar bg="light" variant="light">
                    <Container>
                        <Nav className="mx-auto m-2 ">
                           <Link to='/' className=' m-2 text-decoration-none'><h3>Home</h3></Link>
                           <Link className='m-2 text-decoration-none'><h3>About</h3></Link>
                           <Link className='m-2 text-decoration-none' to="/login"><h3>Login</h3></Link>
                           <Link className='m-2 text-decoration-none'><h3>Contact</h3></Link>
                        </Nav>
                        <Nav>
                            <h4 className='m-3'><CgProfile/> {user.displayName} </h4>
                        {
                            user ? <Button variant="warning">Login</Button> : <Link to='/login'><Button variant="warning">Login</Button></Link>
                        }
                        </Nav>
                    </Container>
                </Navbar>
       </Container>
    );
};

export default NavigationBar;
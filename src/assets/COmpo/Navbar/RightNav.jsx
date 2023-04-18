import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaTripadvisor, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from './QZone';

const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Log in with</h4>
                <Button className='mb-2' variant='outline-primary'><FaGoogle /> Login with Google</Button>
                <Button className='mb-2 ms-2' variant='outline-warning text-black'><FaGithub /> Login with Github</Button>
            </div>
            <div className='mt-3'>
                <ListGroup>
                    <h3>Find us on</h3>
                    <ListGroup.Item><FaFacebook/>  Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>  Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/>  Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
        </div>
    );
};

export default RightNav; <h2>Right nav</h2>
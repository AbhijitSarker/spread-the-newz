import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <h4>Log In With</h4>
            <Button className='w-100' variant="outline-danger"><FaGoogle />  Login With Google</Button>
            <Button className='w-100 mt-2' variant="outline-success"><FaGithub />  Login With GitHub</Button>
            <div className='mt-5'>
                <h4>Find Us on </h4>
                <ListGroup className='text-center'>
                    <ListGroup.Item><FaFacebook />   Facebok</ListGroup.Item>
                    <ListGroup.Item><FaInstagram />   Instagram </ListGroup.Item>
                    <ListGroup.Item><FaTwitter />   Twitter</ListGroup.Item>

                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;
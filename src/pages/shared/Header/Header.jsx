import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
    }

    return (
        <Container >

            <div className="text-center">
                <img className='w-50 mt-3' src={logo} alt="" />
                <p className='mb-0'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={100} className='text-danger'>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" className="mt-2 bg-body-tertiary mb-3">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Link to='/category/0'>Home</Link>

                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing" >Career</Nav.Link>

                        </Nav>
                        <Nav>
                            {user && <Nav.Link >
                                <FaUserCircle></FaUserCircle>
                            </Nav.Link>}

                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">Log Out</Button>
                                : <Link to='/login'><Button variant="secondary">Log In</Button></Link>}

                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar >
        </Container >

    );
};

export default Header;
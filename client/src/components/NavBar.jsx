import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {Button, Container, Form, ModalTitle, Modal, Nav, Navbar} from "react-bootstrap";
import logo from "../assets/logo.jpg";
import {Link} from "react-router-dom";
import registration from "../store/user/userStore";
import {registrationApi} from "../http/index";

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #adb1b8;

    &:hover {
      color: white;
    }
  }`

const NavBar = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (<>
        <Styles>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link className='text-decoration-none' to='/'>
                        <Navbar.Brand>
                            <img src={logo} width="30" height="30" className="d-inline-block align-top me-2 text-decoration-none" alt="logo"/>
                            Travel
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav variant="dark" className="me-auto gap-2">
                            <Link id="RouterNavLink" to='/' className='text-decoration-none'>Home</Link>
                            <Link id="RouterNavLink" to='/tours' className='text-decoration-none'>Tours</Link>
                            <Link id="RouterNavLink" to='/about' className='text-decoration-none'>About</Link>
                        </Nav>
                        <Nav>
                            <Button variant="primary" className="me-2" onClick={handleShow}>Log In</Button>
                            <Button variant="primary" onClick={handleShow}>Log out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <ModalTitle>Log in</ModalTitle>
            </Modal.Header>
            <Modal.Body>

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control type="email" 
                                      value={email} 
                                      onChange={e => setEmail(e.target.value)}
                                      placeholder="Enter email"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Email Password</Form.Label>
                        <Form.Control type="password"
                                      value={password} 
                                      onChange={e => setPassword(e.target.value)}
                                      placeholder="Enter password"/>
                    </Form.Group>
                    <Button className="me-2" 
                            variant="primary"
                            onClick={() => registrationApi(email, password)}
                            >Sent</Button>
                </Form>

            </Modal.Body>
        </Modal>
    </>);
};

export default NavBar;
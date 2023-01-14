import React, {useState} from 'react';
import styled from "styled-components";
import {Button, Container, Form, Modal, ModalTitle, Nav, Navbar} from "react-bootstrap";
import logo from "../assets/logo.jpg";
import {Link} from "react-router-dom";

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #adb1b8;

    &:hover {
      color: white;
    }
  }
`

const NavBar = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (<>
        <Styles>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link className='text-decoration-none' to='/'>
                        <Navbar.Brand>
                            <img src={logo}
                                 width="30"
                                 height="30"
                                 className="d-inline-block align-top me-2 text-decoration-none"
                                 alt="logo"/>
                            Travel</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav variant="dark" className="me-auto">
                            <Link id="RouterNavLink" to='/' className='text-decoration-none'>Home</Link>
                            <Link id="RouterNavLink" to='/tours' className='text-decoration-none'>Tours</Link>
                            <Link id="RouterNavLink" to='/about' className='text-decoration-none'>About</Link>

                            {/*<Nav.Link><Link to='/' className='text-decoration-none'>Home</Link></Nav.Link>*/}
                            {/*<Nav.Link><Link to='/tours' className='text-decoration-none'>Tours</Link></Nav.Link>*/}
                            {/*<Nav.Link><Link to='/about' className='text-decoration-none'>About</Link></Nav.Link>*/}
                        </Nav>
                        <Nav>
                            <Button variant="primary" className="me-2" onClick={handleShow}>Log In</Button>
                            <Button variant="primary" onClick={handleShow}>Sign out</Button>
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
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Email Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"/>
                    </Form.Group>
                </Form>

            </Modal.Body>
        </Modal>
    </>);
};

export default NavBar;
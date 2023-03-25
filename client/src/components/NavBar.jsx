import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {Button, Container, Form, ModalTitle, Modal, Nav, Navbar} from "react-bootstrap";
import logo from "../assets/logo.jpg";
import {Link} from "react-router-dom";
import registration from "../store/user/userStore";
import {registrationApi, loginApi} from "../http/index";
import {login} from "../store/user/userStore";

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #adb1b8;

    &:hover {
      color: white;
    }
}`




const NavBar = () => {

    const dispatch = useDispatch();
    
    const [nickName, setNickName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [flag, setFlag] = useState(true);
    const [show, setShow] = useState(false);

    const loginRegistration = () => {
        if(!flag) {
            registrationApi(email, password);
        } else {
           dispatch(login({email, password, nickName}));
        }
        setNickName("");
        setEmail("");
        setPassword("");
    }
      

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
                            <Link id="RouterNavLink" to='/tours' className='text-decoration-none'>Туры</Link>
                            <Link id="RouterNavLink" to='/about' className='text-decoration-none'>О нас</Link>
                        </Nav>
                        <Nav>
                            <Button variant="primary"
                                    className="me-2"
                                    onClick={ () => {setShow(true); setFlag(true); }}
                            >Войти</Button>

                            <Button variant="primary"
                                    onClick={ () => {setShow(true); setFlag(false); }}
                            >Регистрация</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>

        <Modal show={show} onHide={ () => setShow(false)}>
            <Modal.Header closeButton>
                <ModalTitle>{flag === true ? "Войти" : "Регистрация"}</ModalTitle>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicPassword">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control type="text"
                                          value={nickName} 
                                          onChange={e => setNickName(e.target.value)}
                                          placeholder="Введите имя"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Почта</Form.Label>
                            <Form.Control type="email" 
                                          value={email} 
                                          onChange={e => setEmail(e.target.value)}
                                          placeholder="Введите почту"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password"
                                          value={password} 
                                          onChange={e => setPassword(e.target.value)}
                                          placeholder="Введите пароль"/>
                        </Form.Group>
                        <Button className="mt-2 ml-5" variant="primary" onClick={loginRegistration}>Отправить</Button>
                </Form>

            </Modal.Body>
        </Modal>
    </>);
};

export default NavBar;

//ismaissy2001@gmail.com
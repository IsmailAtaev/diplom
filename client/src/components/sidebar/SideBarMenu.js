import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/js/dist/dropdown"
import "./sidebar.css";
import {Link} from "react-router-dom";
import {Button, Container, Form, ModalTitle, Modal, Nav, Navbar} from "react-bootstrap";



const SideBarMenu = () => {
  return (
  


        <div className="container-fluid"> 
            <div className="row">
                <div className="bg-dark col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Container>
           
                         <Nav variant="dark" className="me-auto gap-2">
                           <div>
                   
                            <hr className="text-secondary d-none d-sm-block"/>

                            <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
                                <Link id="RouterNavLink" to='/tour-work' className='text-decoration-none'>
                                    <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">                    
                                        <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                            <i className="bi bi-airplane-engines"></i>
                                            <span className="ms-3 d-none d-sm-inline">Tours</span>
                                        </a>
                                    </li>
                                </Link>

                                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                                    <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                        <i className="bi bi-house"></i>
                                        <span className="ms-3 d-none d-sm-inline">Dashboard</span>
                                    </a>
                                </li>

                                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                                    <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                        <i className="bi bi-table"></i>
                                        <span className="ms-3 d-none d-sm-inline">Orders</span>
                                    </a>
                                </li>

                                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                                    <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                        <i className="bi bi-grid"></i>
                                        <span className="ms-3 d-none d-sm-inline">Products</span>
                                    </a>
                                </li>

                                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                                    <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                        <i className="bi bi-people"></i>
                                        <span className="ms-3 d-none d-sm-inline">Custem</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        </Nav>
              
                    </Container>
                </Navbar>


                    <div className="dropdown open">
                        <a className="bg-dark text-decoration-none text-white dropdown-toggle p-3" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bi bi-person-circle"></i> <span className="ms-2 d-none d-sm-inline">Isma</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="triggerId">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" href="#">Setting</a>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
 
);};

export default SideBarMenu;

/* <a className="text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-2">
                            {/* <i className="fs-4 bi bi-speedometer"></i>
                            <span className="ms-1 fs-4">Brand</span>
                        </a> */


/**          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
<Navbar.Collapse id="responsive-navbar-nav"> */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/js/dist/dropdown"
import "./sidebar.css";
import {useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import TourItem from "../tour/tourItem";


const styleAddTour = {
    display: "flex",
    flexWrap: "wrap",
  };

const SideBarMenu = () => {


    const tours = useSelector((state) => state.tour.tours);




  return (<>
        <div className="d-flex">
            <div className="container-fluid"> 
                <div className="row">
                    <div className="bg-dark col-auto col-md-1.5 min-vh-100 d-flex justify-content-between flex-column">
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                            <Container>
                                <Nav variant="dark" className="me-auto gap-2">
                                    <div>
                                        <hr className="text-secondary d-none d-sm-block"/>
                                        <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
    
                                            <Link id="RouterNavLink" to='/tour-work' className='text-decoration-none'>
                                                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">                    
                                                    <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                                        <i className="bi bi-airplane-fill"></i>
                                                        <span className="ms-3 d-none d-sm-inline">Tours</span>
                                                    </a>
                                                </li>
                                            </Link>

                                            <Link id="RouterNavLink" to='/dashboard' className='text-decoration-none'>
                                                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                                                    <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                                        <i className="bi bi-clipboard2-data-fill"></i>
                                                        <span className="ms-3 d-none d-sm-inline">Booked</span>
                                                    </a>
                                                </li>
                                            </Link>

                                            <Link id="RouterNavLink" to='/dashboard' className='text-decoration-none'>
                                                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                                                    <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                                        <i className="bi bi-ticket-detailed-fill"></i>
                                                        <span className="ms-3 d-none d-sm-inline">Ticket</span>
                                                    </a>
                                                </li>
                                            </Link>

                                            <Link id="RouterNavLink" to='/dashboard' className='text-decoration-none'>
                                                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                                                    <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                                        <i className="bi bi-people-fill"></i>
                                                        <span className="ms-3 d-none d-sm-inline">Customers</span>
                                                    </a>
                                                </li>
                                            </Link>
                                        </ul>

                                        <div className="dropdown open">
                                            <a className="bg-dark text-decoration-none text-white dropdown-toggle p-3" 
                                               type="button"
                                               id="triggerId" 
                                               data-bs-toggle="dropdown"
                                               aria-haspopup="true" 
                                               aria-expanded="false">
                                                <i className="bi bi-person-circle"></i> <span className="ms-2 d-none d-sm-inline">Isma</span></a>
                                            <div className="dropdown-menu" aria-labelledby="triggerId">
                                                <Link id="RouterNavLink" to='/dashboard' className='text-decoration-none'>
                                                    <a className="dropdown-item" href="#">Profile</a>
                                                </Link>
                                                <Link id="RouterNavLink" to='/dashboard' className='text-decoration-none'>
                                                <a className="dropdown-item" href="#">Setting</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Nav>
                            </Container>
                        </Navbar>   
                    </div> 
                </div>
                
            
            </div>

          

                <div className="d-flex justify-content-center row gy-3 m-lg-2 gap-2 m-4">
                    {tours.map((elem) => (<TourItem key={elem.id} tour={elem} />))}
                </div>
        </div>





    </>)
};

export default SideBarMenu;

/* <a className="text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-2">
                            {/* <i className="fs-4 bi bi-speedometer"></i>
                            <span className="ms-1 fs-4">Brand</span>bi bi-table 
                        </a> 
*/


/*<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
<Navbar.Collapse id="responsive-navbar-nav"> 
*/

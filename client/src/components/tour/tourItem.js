import React from "react";
import {Button, Container, Form, ModalTitle, Modal, Nav, Navbar, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {removeTour} from "../../http/index"
import {useDispatch} from "react-redux";
import egyp from "../../assets/Egypt3.jpg";
import {deleteTourItem, getTours} from "../../store/tourStore/tourSlice";


const ADMIN = "ADMIN";
const USER = "USER";
const isAuth = USER;

const TourItem = ({ tour }) => {


  const dispatch = useDispatch();


  return (
    <Card className="mt-4" style={{ width: "18rem", height: "27rem", alignContent: "center" }}>
      <Card.Img variant="top" src={egyp} />
      <Card.Body>
        <Card.Title>{tour.country + " - " + tour.type}</Card.Title>
          <Card.Text>
            {tour._id}
            <br/>
            {tour.name}
            <br/>
            {tour.city}
            <br/>
            {tour.duration}
          </Card.Text>
        <Card.Text>{tour.price}</Card.Text>
        <div className="d-flex">  
         
             {isAuth === ADMIN ? 
             (<Button variant="primary" className="m-1"  >Редоктировать</Button>) :
             (<Navbar>
                <Container>
                  <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav variant="dark" className="me-auto gap-2">
                      <Link id="RouterNavLink" to='/tour/details' className='text-decoration-none' state={{tour}}>
                        <Button variant="primary" className="m-1">Подробнее</Button>
                      </Link>
                  </Nav>
                  </Navbar.Collapse>
                </Container>  
              </Navbar>)}

          {isAuth === ADMIN ? 
            <Button variant="primary" className="m-2" onClick={() => { 
                      dispatch(deleteTourItem({id: tour._id}));
                      dispatch(getTours());}}
            >Удалить</Button> : ""}
        </div>

      </Card.Body>
    </Card>
  );
};

export default TourItem;
// onClick={() => removeTour({id: tour._id})}


/*


 <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav variant="dark" className="me-auto gap-2">
                            <Link id="RouterNavLink" to='/tours' className='text-decoration-none'>Туры</Link>
                        </Nav>
</Navbar.Collapse>


*/
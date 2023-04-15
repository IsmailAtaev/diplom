import React from "react";
import {Button, Container, Card, Col, Row, Nav, Navbar} from "react-bootstrap";
import { useSelector} from "react-redux";
import { useLocation, Link } from "react-router-dom";

const DetailsTour = ({isAuth, user}) => {
  const location = useLocation();
  const { tour } = location.state;
  const { name, type, date, country, city, price, duration } = Object.assign({}, tour);
  
  return (<>
    <Container>

      <Row className="justify-content-md-center mt-3" style={{textAlign: "center"}}>
        <Col md="auto">
          <Card style={{ width: '50rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                {name}<br/>{type}<br/>{date}<br/>{country}<br/>{city}<br/>{price}<br/>{duration}
              </Card.Text>
            </Card.Body>
          </Card> 

        </Col>
      </Row>
      
      <Row className="justify-content-md-center mt-3" style={{textAlign: "center"}}>
        <Col md="auto">Отели</Col>
      </Row>


      <Navbar>
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav variant="dark" className="me-auto gap-2">
              {(user.role === "USER" ) ?
                  (<>
                      <Link id="RouterNavLink" to='/booking/user' className='text-decoration-none' state={{tour}}>
                        <Button variant="primary" className="m-1">Бронировать</Button>
                      </Link>
                  
                      <Link id="RouterNavLink" to='/tour/details/buy' className='text-decoration-none' state={{tour}}>
                        <Button variant="success" className="m-1">Купить</Button>
                      </Link>
                    </>
                  ) : ("")}
                {user === undefined ? 
                  <Link id="RouterNavLink" to='/tour/details/buy' className='text-decoration-none' state={{tour}}>
                    <Button variant="success" className="m-1">Купить</Button>
                  </Link> : ""}
            </Nav>
          </Navbar.Collapse>
        </Container>  
      </Navbar>
    </Container>

    </>
  );
};

export default DetailsTour;

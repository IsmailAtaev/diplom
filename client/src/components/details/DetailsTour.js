import React from "react";
import {Button, Container, Card, Col, Row, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";

const DetailsTour = () => {
  const location = useLocation();
  const { tour } = location.state;
  const { name, type, date, country, city, price, duration } = Object.assign({}, tour);
  console.log("tour det: ", tour);

  return (<>


      {/* <h1>
        detailsTour{" "}
        {`${name} ${type} ${date} ${country} ${city} ${price} ${duration}`}
      </h1> */}
      {/* <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card> */}


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
              <Link id="RouterNavLink" to='/tour/details' className='text-decoration-none'>
                <Button variant="primary" className="m-1">Купить</Button>
              </Link>
              
              <Link id="RouterNavLink" to='/tour/details/buy' className='text-decoration-none' state={{tour}}>
                <Button variant="success" className="m-1">Бронировать</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>  
      </Navbar>
    </Container>

    </>
  );
};

export default DetailsTour;

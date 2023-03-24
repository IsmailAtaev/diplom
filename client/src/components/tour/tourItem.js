import React from "react";
import { Button, Card } from "react-bootstrap";
import {removeTour} from "../../http/index"

import egyp from "../../assets/Egypt3.jpg";

const ADMIN = "ADMIN";
const USER = "USER";

const isAuth = ADMIN;

const TourItem = ({ tour }) => {
  return (
    <Card
      className="mt-4"
      style={{ width: "18rem", height: "27rem", alignContent: "center" }}
    >
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
          {isAuth === ADMIN ? (
            <Button variant="primary" className="m-1">
              Редоктировать
            </Button>
          ) : (
            <Button variant="primary" className="m-1">
              Подробнее
            </Button>
          )}

          {isAuth === ADMIN ? 
            <Button variant="primary" 
                    className="m-2"
                    onClick={() => removeTour(tour._id)}
            >Удалить</Button> : ""}
        </div>

      </Card.Body>
    </Card>
  );
};

export default TourItem;



/*(
            <Button variant="primary">qqq</Button>
          )
          
*/

import React from 'react';
import {Button, Card} from "react-bootstrap";

import egyp from "../../assets/Egypt3.jpg"

const TourItem = ({tour}) => {

    return (
        <Card style={{ width: '18rem', alignContent: "center" }}>
            <Card.Img variant="top" src={egyp} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );

    /* return (<>
        <tbody>
        <tr>
            <td>{tour.country}</td>
            <td>{tour.city}</td>
            <td>{tour.type}</td>
        </tr>
        </tbody>
    </>);*/
};

export default TourItem;
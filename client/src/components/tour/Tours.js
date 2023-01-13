import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Table} from "react-bootstrap";
import TourItem from "./tourItem";

const TOUR_URL = 'http://localhost:5000/tour';
const styleT = {
    display: 'flex',
    justifyContent: 'center'
}

const Tours = () => {

    const [tour, setTour] = useState([]);

    useEffect(() => {
        axios.get(TOUR_URL).then((resolve) => setTour(resolve.data));
    }, [])

    console.log(tour);

    return (<div style={styleT}>
        {tour.map((elem) => <TourItem tour={elem}/>)}

        {/*<Table striped bordered hover size="sm">*/}
        {/*</Table>*/}
    </div>);
};

export default Tours;
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Table} from "react-bootstrap";
import TourItem from "./tourItem";
//import css from "./tour.modul.css";

const TOUR_URL = 'http://localhost:5000/tour';


const Tours = () => {

    const [tour, setTour] = useState([]);

    useEffect(() => {
        axios.get(TOUR_URL).then((resolve) => setTour(resolve.data));
    }, [])


    return (<div>
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>Country</th>
                <th>City</th>
                <th>Username</th>
            </tr>
            </thead>
            {tour.map((elem) => <TourItem tour={elem}/>)}
        </Table>
    </div>);
};

export default Tours;
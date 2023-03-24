import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateTour from "../modals/CreateTour";
import Tours from "../tour/Tours";

const Admin = () => {

    const [tourVisible, setTourVisible] = useState(false);


    return (
        <div>
            <Container className="d-flex align-items-center">
                <Button variant={"outline-dark"} className="mt-2" onClick={() => setTourVisible(true)}>Добвить тур</Button>
                <CreateTour show={tourVisible} onHide={() => setTourVisible(false)}/>
            </Container>
            <Tours />
            
        </div>
)};

export default Admin;
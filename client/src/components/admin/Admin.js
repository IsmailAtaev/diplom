import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateTour from "../modals/CreateTour";

const Admin = () => {

    const [tourVisible, setTourVisible] = useState(false);


    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setTourVisible(true)}>Добвить тур</Button>
            <CreateTour show={tourVisible} onHide={() => setTourVisible(false)}/>
        </Container>
    );
};

export default Admin;
import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateTour from "../modals/CreateTour";

const Admin = () => {

    const [tourVisible, setTourVisible] = useState(false);


    return (
        <div>
        <Container className="d-flex align-items-center">
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setTourVisible(true)}>Добвить тур</Button>
            <CreateTour show={tourVisible} onHide={() => setTourVisible(false)}/>

            <Button variant={"outline-dark"} className="mt-2" onClick={() => setTourVisible(true)}>Редоктировать тур</Button>
            <CreateTour show={tourVisible} onHide={() => setTourVisible(false)}/>

            <Button variant={"outline-primary"} className="mt-2" onClick={() => setTourVisible(true)}>Удалить тур</Button>
            <CreateTour show={tourVisible} onHide={() => setTourVisible(false)}/>
        </Container>
        </div>
    );
};

export default Admin;
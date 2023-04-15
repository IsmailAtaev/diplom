import {React, useState} from 'react';
import {Container, Nav, Navbar, Table, Button, Alert} from "react-bootstrap";
import {useSelector } from "react-redux";
import CreateTour from "../modals/CreateTour";
//import Tours from "../tour/Tours";
import TourAdmin from "../tour/TourAdmin";


const Admin = () => {
    const tours = useSelector((state) => state.tour.tours);
    const [tourVisible, setTourVisible] = useState(false);


    return (
        <div className="mt-3">
            <Container className="d-flex justify-content-md-center">
                <Alert key="secondary" variant="secondary">
                    <Button variant="primary" className="m-2" onClick={() => setTourVisible(true)}>Добвить тур</Button>
                    <CreateTour show={tourVisible} onHide={() => setTourVisible(false)}/>

                    <Button variant="primary" className="m-2" onClick={() => setTourVisible(true)}>Добвить отель</Button>
                    <CreateTour show={tourVisible} onHide={() => setTourVisible(false)}/>
                </Alert>
            </Container>
            {/* <Tours /> */}
            


             <div className="d-flex justify-content-center row gy-3 m-lg-2 gap-2 m-4">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th><th>Название тура</th><th>Тип тура</th><th>Страна</th><th>Город</th><th>Дата</th><th>Длительность</th><th>Цена $</th><th></th><th></th>
                        </tr>
                    </thead>
                    {tours.map((elem) => (<TourAdmin key={elem.id} tour={elem} index={elem.index}/>)).reverse()}
                </Table>
            </div> 

        </div>
)};

export default Admin;
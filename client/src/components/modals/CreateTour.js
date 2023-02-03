import React, { useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import {createTour} from "../../http/index.js";

const device = [
  {
    id: 1,
    name: "tourse",
  },
  {
    id: 2,
    name: "qwer",
  },
  {
    id: 3,
    name: "asdf",
  },
  {
    id: 4,
    name: "zxcxvb",
  },
];

const setSelectedType = (t) => console.log(t);

const CreateTour = ({ show, onHide }) => {
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  const addBrand = () => {
    // createBrand({name: value}).then(data => {
    //     setValue('')
    //     onHide()
    // })

    createTour({ name: value, type: type });
    setValue("");
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тур
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{type || "Выберите тип"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.map((type) => (
                <Dropdown.Item onClick={() => setType(type.name)} key={type.id}>
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={"Введите название типа"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addBrand}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateTour;

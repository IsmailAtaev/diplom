import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Button, Col, Form, Container } from "react-bootstrap";
import { arrCountries } from "../../utils/countries";
import Customer from "./сustomer/Customer";
//import encrypt from "../../cryptoInfo/encrypt";

/**
    last name - фамилия 
    first name - имя 
    patronymic - отчество
    Citizenship - Гражданство
    Passport series and number - Серия и Номер паспорта
    Date of passport - Дата выдачи паспорта
    Validity period - Срок действия
     
    ///
    Passport issued by - Паспорт, выданный
 */

const ClientInfo = () => {


  const [trigger, setTrigger] = useState(0);



  const countCustomer = [1, 2];
  const [date, setDate] = useState(new Date());
  const [gender, setGender] = useState({ sex: "" });
  const customers = useSelector((state) => state.customer.customers);

  
  const { sex } = gender;

  const handleChange = (e) => {
    e.persist();
  
    console.log(e.target.value);

    setGender((prevState) => ({
      ...prevState,
      sex: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTrigger((trigger) => trigger + 1);
    console.log("info: ", typeof customers);
  };

  return (
    <div>
      <Container>
        <div>
          {countCustomer.map((elem) => (<Customer key={elem.id} trigger={trigger}/>
          ))}
        </div>

        <Row className="border rounded justify-content-md-center mt-4 ml-5 p-3 mb-2 bg-light text-dark">
          <Col xs={12} md={7}>
            <Form>
              <Row className="mb-3 mt-3">
                <h2>Заказчик</h2>
                <hr className="text-secondary d-none d-sm-block" />
                <br />

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Фамилия</Form.Label>
                  <Form.Control type="text" placeholder="Ведите фамилию" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Имя</Form.Label>
                  <Form.Control type="text" placeholder="Ведите имя" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Отчество</Form.Label>
                  <Form.Control type="text" placeholder="Ведите отчество" />
                </Form.Group>
              </Row>

              <Row className="mb-3 mt-3">
                <div className="col-md-3 row">
                  <Form.Group className="mb-3" controlId="duedate">
                    <Form.Label>Дата рождения</Form.Label>
                    <Form.Control
                      type="date"
                      name="duedate"
                      placeholder="Due date"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </Form.Group>
                </div>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Гражданство</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    {arrCountries.map((country) => (
                      <option
                        className="p-3 mb-2 bg-secondary text-white"
                        key={country._id}
                      >{country}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPasportNumber">
                  <Form.Label>Серия и Номер паспорта</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите серию и номер паспорта"
                  />
                </Form.Group>

                <Form.Group
                  className="col-md-6"
                  as={Col}
                  controlId="formGridPassword"
                >
                  <Form.Label>Кем выдан паспорт</Form.Label>
                  <Form.Control type="text" placeholder="Кем выдан паспорт" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <div className="col-md-3 row">
                  <Form.Group className="mb-3" controlId="duedate">
                    <Form.Label>Дата выдачи</Form.Label>
                    <Form.Control
                      type="date"
                      name="duedate"
                      placeholder="Due date"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </Form.Group>
                </div>

                <div className="col-md-3 row">
                  <Form.Group className="mb-3" controlId="duedate">
                    <Form.Label>Срок действия</Form.Label>
                    <Form.Control
                      type="date"
                      name="duedate"
                      placeholder="Due date"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </Form.Group>
                </div>
              </Row>

              <br />
              <hr className="text-secondary d-none d-sm-block" />
              <h4>Адрес регистрации</h4>

              <Row className="mb-3 mt-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Гражданство</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    {arrCountries.map((country) => (
                      <option
                        className="p-3 mb-2 bg-secondary text-white"
                        key={country._id}
                      >
                        {country}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Область и район</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ведите область и район"
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3 mt-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Город</Form.Label>
                  <Form.Control type="text" placeholder="Ведите город" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Улица</Form.Label>
                  <Form.Control type="text" placeholder="Ведите улицу" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Дом</Form.Label>
                  <Form.Control type="text" placeholder="Ведите дом" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Квартира</Form.Label>
                  <Form.Control type="text" placeholder="Ведите квартиру" />
                </Form.Group>
              </Row>

              <br />
              <hr className="text-secondary d-none d-sm-block" />
              <h4>Контактные данные</h4>
              <Row className="mb-3 mt-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Электронная почта</Form.Label>
                  <Form.Control type="text" placeholder="Ведите email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Номер телефона</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ведите номер телефона"
                  />
                </Form.Group>
              </Row>
            </Form>
          </Col>
        </Row>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Container>
    </div>
  );
};

export default ClientInfo;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore, useDispatch } from "react-redux";
import {
  Row,
  Button,
  Col,
  Form,
  Container,
  ModalTitle,
  Modal,
  Nav,
  Navbar,
  Card,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { arrCountries } from "../../utils/countries";
import Customer from "./сustomer/Customer";
import {
  addMainClient,
  addTour,
  buyTour,
  getValidateCard,
} from "../../store/customerStore/customerSlice";
import { decrypted, encrypted } from "../../cryptoInfo/encrypt";

/**
    last name - фамилия 
    first name - имя 
    patronymic - отчество
    Citizenship - Гражданство
    Passport series and number - Серия и Номер паспорта
    Date of passport - Дата выдачи паспорта
    Validity period - Срок действия
    Passport issued by - Паспорт, выданный
 */

const ClientInfo = () => {
  const location = useLocation();
  const { tour } = location.state;

  const store = useStore();
  const [trigger, setTrigger] = useState(0);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const countCustomer = [1, 2];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [mm, setMm] = useState("");
  const [gg, setGg] = useState("");
  const [cvvCvc, setCvvCvc] = useState("");
  const [codeId, setCodeId] = useState("");

  const handleSubmit = (e) => {
    dispatch(getValidateCard({ email }));
    dispatch(
      addMainClient({
        mainClient: {
          firstName,
          lastName,
          email,
          phoneNumber,
        },
      })
    );
    dispatch(addTour({ tour: tour }));
    setTrigger((trigger) => trigger + 1);
    setShow(true);
  };

  const handleSubmitCard = (e) => {
    const card = { cardNumber, cardHolder, mm, gg, cvvCvc, codeId };
    const obj = store.getState();
    let objectClient = { ...obj.customer };
    objectClient.mainClient = {
      ...objectClient.mainClient,
      ...card,
    };
      dispatch(buyTour(encrypted(JSON.stringify(objectClient))));
      setShow(false);
  };

  // useEffect(() => {
  //   if (trigger) {
  //     const obj = store.getState();
  //        dispatch(buyTour(encrypted(JSON.stringify(obj.customer))));
  //   }
  //   // const obj = store.getState();
  //   // const d = obj.customer;

  //   // console.log("obj : ", d);

  //   //console.log("info: ", customers);
  //   // let jj = JSON.stringify(d);
  //   // console.log("json: ", jj);
  //   // console.log("json: ", typeof jj);

  //   // let ff = JSON.parse(decrypted(encrypted(jj)));
  //   // console.log("parse: ");

  //   // console.log("parse: ", ff);
  //   // console.log("parse: ", typeof ff);
  //   console.log("parse: not trigger ");
  // }, [trigger]);

  return (
    <div>
      <Container>
        <div>
          {countCustomer.map((elem) => (
            <Customer key={elem.id} trigger={trigger} />
          ))}
        </div>

        <Row className="border rounded justify-content-md-center mt-4 ml-5 p-3 mb-2 bg-light text-dark">
          <Col xs={12} md={7}>
            <Form>
              <h4>Контактные данные</h4>
              <hr className="text-secondary d-none d-sm-block" />
              <Row className="mb-3 mt-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Электронная почта</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ведите email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPhoneNumber">
                  <Form.Label>Номер телефона</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ведите номер телефона"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3 mt-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form>Фамилия</Form>
                  <Form.Control
                    type="text"
                    placeholder="Введите фамилию"
                    controlId="formFirstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form>Имя</Form>
                  <Form.Control
                    type="text"
                    placeholder="Ведите имя"
                    controlId="formGridLastNameClient"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
              </Row>
            </Form>
          </Col>
        </Row>
        <Button
          className="m-1"
          variant="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Далее
        </Button>
      </Container>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <ModalTitle>Оплата тура</ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicCardNumber">
              <Form.Control
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Номер карты"
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formBasicCardHolder">
              <Form.Control
                type="text"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                placeholder="Держатель карты"
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formBasicMM">
              <Form.Control
                type="text"
                value={mm}
                onChange={(e) => setMm(e.target.value)}
                placeholder="mm"
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formBasicCardGG">
              <Form.Control
                type="text"
                value={gg}
                onChange={(e) => setGg(e.target.value)}
                placeholder="gg"
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formBasicCardCVV">
              <Form.Control
                type="text"
                value={cvvCvc}
                onChange={(e) => setCvvCvc(e.target.value)}
                placeholder="CVV/CVC2"
              />
            </Form.Group>

            <Form.Group controlId="formBasicCardCVV">
              <Form.Label>Код потверждения отправлен на почту</Form.Label>
              <Form.Control
                type="text"
                value={codeId}
                onChange={(e) => setCodeId(e.target.value)}
                placeholder="4 символа"
              />
            </Form.Group>

            <Button
              className="mt-2 ml-5"
              variant="primary"
              onClick={handleSubmitCard}
            >
              Оплатить
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ClientInfo;

/*
  const [patronymic, setPatronymic] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [citizenship, setCitizenship] = useState("");
  const [passportSeriesAndNumber, setPassportSeriesAndNumber] = useState("");
  const [passportIssuedBy, setPassportIssuedBy] = useState("");
  const [dateOfPassport, setDateOfPassport] = useState(new Date());
  const [validityPeriod, setValidityPeriod] = useState(new Date());
  const [country, setCountry] = useState("");
  const [regionAndDistrict, setRegionAndDistrict] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [home, setHome] = useState("");
  const [apartment, setApartment] = useState("");
  patronymic,
          birthDate,
          citizenship,
          passportSeriesAndNumber,
          passportIssuedBy,
          dateOfPassport,
          validityPeriod,
          country,
          regionAndDistrict,
          city,
          street,
          home,
          apartment,

    console.log("firstName ", firstName);
    console.log("lastName ", lastName);
    console.log("patronymic ", patronymic);
    console.log("birthDate ", birthDate);
    console.log("citizenship ", citizenship);
    console.log("passportSeriesAndNumber ", passportSeriesAndNumber);
    console.log("passportIssuedBy ", passportIssuedBy);
    console.log("dateOfPassport ", dateOfPassport);
    console.log("validityPeriod ", validityPeriod);
    console.log("country ", country);
    console.log("regionAndDistrict ", regionAndDistrict);
    console.log("city ", city);
    console.log("street ", street);
    console.log("home ", home);
    console.log("apartment ", apartment);
    console.log("email ", email);
    console.log("phoneNumber ", phoneNumber);

*/

/*
 {/* <Row className="mb-3 mt-3">
                <h2>Заказчик</h2>
                <hr className="text-secondary d-none d-sm-block" />
                <br />
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Фамилия</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ведите фамилию"
                    controlId="formGridFirstNameClient"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Имя</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ведите имя"
                    controlId="formGridLastNameClient"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Отчество</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ведите отчество"
                    controlId="formGridPatronymicClient"
                    value={patronymic}
                    onChange={(e) => setPatronymic(e.target.value)}
                  />
                </Form.Group>
              </Row> */
/* 
              <Row className="mb-3 mt-3">
                <div className="col-md-3 row">
                  <Form.Group className="mb-3" controlId="duedate">
                    <Form.Label>Дата рождения</Form.Label>
                    <Form.Control
                      type="date"
                      name="duedate"
                      placeholder="Due date"
                      onChange={(e) => setBirthDate(e.target.value)}
                    />
                  </Form.Group>
                </div>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Гражданство</Form.Label>
                  <Form.Select onChange={(e) => setCitizenship(e.target.value)}>
                    {arrCountries.map((countryOb) => (
                      <option
                        className="p-3 mb-2 bg-secondary text-white"
                        value={countryOb}
                        key={countryOb._id}
                      >
                        {countryOb}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Row> */

/* <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPasportNumber">
                  <Form.Label>Серия и Номер паспорта</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите серию и номер паспорта"
                    value={passportSeriesAndNumber}
                    onChange={(e) => setPassportSeriesAndNumber(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="col-md-6"
                  as={Col}
                  controlId="formGridPassportIssuedBy"
                >
                  <Form.Label>Кем выдан паспорт</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Кем выдан паспорт"
                    value={passportIssuedBy}
                    onChange={(e) => setPassportIssuedBy(e.target.value)}
                  />
                </Form.Group>
              </Row> */

/* <Row className="mb-3">
                <div className="col-md-3 row">
                  <Form.Group className="mb-3" controlId="duedate">
                    <Form.Label>Дата выдачи</Form.Label>
                    <Form.Control
                      type="date"
                      name="duedate"
                      placeholder="Due date"
                      onChange={(e) => setDateOfPassport(e.target.value)}
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
                      onChange={(e) => setValidityPeriod(e.target.value)}
                    />
                  </Form.Group>
                </div>
              </Row> */

/* <br />
              <hr className="text-secondary d-none d-sm-block" />
              <h4>Адрес регистрации</h4>
              <Row className="mb-3 mt-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Страна</Form.Label>
                  <Form.Select onChange={(e) => setCountry(e.target.value)}>
                    {arrCountries.map((countryClient) => (
                      <option
                        className="p-3 mb-2 bg-secondary text-white"
                        key={countryClient._id}
                        value={countryClient}
                      >
                        {countryClient}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridRegionAndDistrict">
                  <Form.Label>Область и район</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ведите область и район"
                    value={regionAndDistrict}
                    onChange={(e) => setRegionAndDistrict(e.target.value)}
                  />
                </Form.Group>
              </Row> */
/* 
              <Row className="mb-3 mt-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Город</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ведите город"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridStreet">
                  <Form.Label>Улица</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ведите улицу"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridHome">
                  <Form.Label>Дом</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ведите дом"
                    value={home}
                    onChange={(e) => setHome(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridApartment">
                  <Form.Label>Квартира</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ведите квартиру"
                    value={apartment}
                    onChange={(e) => setApartment(e.target.value)}
                  />
                </Form.Group>
              </Row> */

import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore, useDispatch, useSelector } from "react-redux";
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
import CustomerBooking from "./customerBooking/CustomerBooking";
import {
  addMainClient,
  addTour,
  bookingTourSlice,
  getValidateCard,
  getBookingUser,
} from "../../store/customerStore/customerSlice";
import { decrypted, encrypted } from "../../cryptoInfo/encrypt";

const BookingUser = () => {
  const user = useSelector((state) => state.user.user.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [trigger, setTrigger] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const store = useStore();

  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [mm, setMm] = useState("");
  const [gg, setGg] = useState("");
  const [cvvCvc, setCvvCvc] = useState("");
  const [codeId, setCodeId] = useState("");

  const { tour } = location.state;

  const countCustomer = [1];

  const handleSubmit = (e) => {
    dispatch(getValidateCard({ email: user.email }));
    dispatch(
      addMainClient({
        mainClient: {
          firstName,
          lastName,
          phoneNumber,
          email: user.email,
          id: user.id,
          isActivated: user.isActivated,
          role: user.role,
          nickName: user.nickName,
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
    let objectClient = { ...obj.customer, card: card };
    dispatch(bookingTourSlice(encrypted(JSON.stringify(objectClient))));
    // dispatch(getBookingUser(user));
    setShow(false);
  };

  return (
    <div>
      <Container>
        <div>
          {countCustomer.map((elem) => (
            <CustomerBooking key={elem.id} trigger={trigger} />
          ))}
        </div>

        <Row className="border rounded justify-content-md-center mt-4 ml-5 p-3 mb-2 bg-light text-dark">
          <Col xs={12} md={8}>
            <Form>
              <h4>Контактные данные</h4>
              <hr className="text-secondary d-none d-sm-block" />
              <Row className="mb-3 mt-3">
                <Form.Group as={Col} controlId="formGridPhoneNumber">
                  <Form.Label>Номер телефона</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ведите номер телефона"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>Фамилия</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите фамилию"
                    controlId="formFirstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Имя</Form.Label>
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
          Бронировать тур
        </Button>
      </Container>

      <Button
        className="m-1"
        variant="primary"
        type="submit"
        onClick={(e) => {
          console.log("get book: ", user);
          dispatch(getBookingUser(user));
        }}
      >
        get Bookins
      </Button>

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

export default BookingUser;

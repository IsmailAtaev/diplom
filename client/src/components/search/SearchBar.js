import React from "react";
import { Row, Button, Col, Form, Container, Alert } from "react-bootstrap";
// <Row className="border rounded justify-content-md-center mt-4 ml-5 p-3 mb-2 bg-light text-dark">
const SearchBar = () => {
  return (
    <Container className="mt-4 justify-content-md-center">
      <Alert>
        <Col xs={12} md={12}>
          <Form>
            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="text"
                  placeholder="Ведите email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhoneNumber">
                <Form.Control type="text" placeholder="Ведите номер телефона" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhoneNumber">
                <Form.Control type="text" placeholder="Ведите номер телефона" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhoneNumber">
                <Form.Control type="text" placeholder="Ведите номер телефона" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhoneNumber">
                <Form.Control type="text" placeholder="Ведите номер телефона" />
              </Form.Group>

              <Button
                as={Col}
                className="m-1"
                variant="primary"
                type="submit"
                //   onClick={handleSubmit}
              >
                Поиск тура
              </Button>
            </Row>
          </Form>
        </Col>
      </Alert>
    </Container>
  );
};

export default SearchBar;

// <div>
//   <Form className="m-3">
//     <Row>
//       <Col xs={7}>
//         <Form.Control placeholder="City" />
//       </Col>
//       <Col>
//         <Form.Control placeholder="State" />
//       </Col>
//       <Col>
//         <Form.Control placeholder="Zip" />
//       </Col>
//     </Row>
//   </Form>
// </div>

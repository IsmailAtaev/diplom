import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Button,
  Col,
  Form,
  Container,
  Alert,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
// <Row className="border rounded justify-content-md-center mt-4 ml-5 p-3 mb-2 bg-light text-dark">

const stl = {
  boxSizing: "border-box",
  border: "1px solid black",
  display: "inline-block",
  width: "300px",
  margin: "auto",
  textAlign: "center",
  padding: "10px",
};

const footer = {
  backgroundColor: "#f1f1f1",
  borderRadius: "35px",
  boxShadow: "10px 10px 40px #E2E0EE",
};

const SearchBar = () => {
  const [date, setDate] = useState(new Date());

  const [opened, setOpened] = useState(true);

  return (
    // <div
    //   className="container my-5 rounded text-center text-dark"
    //   style={footer}
    // >
    //   <Container className="p-4 justify-content-md-center">
    //     <Col xs={12} md={8}>
    //       <Form>
    //         <Row>
    //           <Form.Group as={Col} controlId="formGridEmail">
    //             <Form.Control
    //               type="text"
    //               placeholder="Откуда"
    //               // value={email}
    //               // onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </Form.Group>
    //           <Form.Group as={Col} controlId="formGridEmail">
    //             <Form.Control
    //               type="text"
    //               placeholder="Откуда"
    //               // value={email}
    //               // onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </Form.Group>

    //           <Form.Group as={Col} controlId="formGridPhoneNumber">
    //             {opened ? (
    //               <div style={stl}>
    //                 <h1>Hello BreatheCode</h1>
    //                 <button type="button" onClick={() => setOpened(false)}>
    //                   +
    //                 </button>
    //                 <button type="button" onClick={() => setOpened(false)}>
    //                   -
    //                 </button>
    //               </div>
    //             ) : (
    //               <button type="button" onClick={() => setOpened(true)}>
    //                 Open
    //               </button>
    //             )}
    //           </Form.Group>

           
    //         </Row>
    //       </Form>
    //     </Col>
    //   </Container>
    // </div>

    <Container className="mt-4 justify-content-md-center">
      <Alert key="secondary" variant="secondary">
        <Col xs={12} md={12}>
          <Form>
            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="text"
                  placeholder="Откуда"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhoneNumber">
                <Form.Control type="text" placeholder="Куда" />
              </Form.Group>

              <div className="col-md-2 row">
                <Form.Group className="mb-3" controlId="duedate">
                  <Form.Control
                    type="date"
                    name="duedate"
                    placeholder="Когда"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Form.Group>
              </div>

              <Form.Group as={Col} controlId="formGridPhoneNumber">
                <Form.Control type="text" placeholder="На сколько" /> 
                {/* <div className="dropdown open rounded" style={{borderRadius: "30px"}}>
                     <a className="bg-light text-decoration-none text-dark dropdown-toggle p-3"
                       type="button"
                       id="triggerId"
                       data-bs-toggle="dropdown"
                       aria-haspopup="true"
                       aria-expanded="false"
                       >
                        <span className="ms-2 d-none d-sm-inline">Isma</span>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="triggerId">
                    <Row>
                        <Button className="dropdown-item">+</Button>
                        <Button className="dropdown-item">dvsv</Button>
                        <Button className="dropdown-item">-</Button>
                    </Row>
                        <Button className="dropdown-item">-</Button>
                    </div>
                </div> */}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhoneNumber">
                <Form.Control type="text" placeholder="Кто поедет" />
              </Form.Group>

              <Button
                as={Col}
                className="mb-3"
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

import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Nav,
  Navbar,
  Table,
  Button,
  Dropdown,
} from "react-bootstrap";

function BookingUserBasket() {
  const [bookingUser, setBookingUser] = useState([]);
  const bookings = useSelector((state) => state.customer.booking);

  useEffect(() => {
    setBookingUser(bookings);
  }, [bookings]);

  return (
    <div style={{ margin: "0% 2%" }}>
      <div className="d-flex justify-content-center row gy-3 m-lg-2 gap-2 m-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Тур</th>
              <th>Кто едит</th>
              <th>Страна</th>
              <th>Город</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((elem) => {
              return (
                <tr>
                  <td>1</td>
                  <td>
                    <div className="d-flex" style={{ marginBottom: "3%" }}>
                      <h6>Название тура:</h6>
                      <div style={{ marginLeft: "5%" }}>
                        {elem.tourInfo.name}
                      </div>
                    </div>

                    <div className="d-flex" style={{ marginBottom: "3%" }}>
                      <h6>Страна:</h6>
                      <div style={{ marginLeft: "5%" }}>
                        {elem.tourInfo.country}
                      </div>
                    </div>

                    <div className="d-flex" style={{ marginBottom: "3%" }}>
                      <h6>Город:</h6>
                      <div style={{ marginLeft: "5%" }}>
                        {elem.tourInfo.city}
                      </div>
                    </div>

                    <div className="d-flex" style={{ marginBottom: "3%" }}>
                      <h6>Длительность:</h6>
                      <div style={{ marginLeft: "5%" }}>
                        {elem.tourInfo.duration}
                      </div>
                    </div>

                    <div className="d-flex" style={{ marginBottom: "3%" }}>
                      <h6>Туп тура:</h6>
                      <div style={{ marginLeft: "5%" }}>
                        {elem.tourInfo.type}
                      </div>
                    </div>
                  </td>

                  <td>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Фамилия</th>
                          <th>Имя</th>
                          <th>Дата рождения</th>
                          <th>Пол</th>
                        </tr>
                      </thead>
                    </Table>
                    <tbody>
                      {elem.bookingInfo.customers.map((value) => {
                        return (
                          <tr>
                            <div style={{ marginLeft: "10%" }}>
                              {value.firstName}
                            </div>
                            <td style={{ marginLeft: "20%" }}>
                              {value.lastName}
                            </td>
                            <td style={{ marginLeft: "30%" }}>
                              {value.birthDate}
                            </td>
                            <td style={{ marginLeft: "40%" }}>
                              {value.gender}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </td>
                  <td>@mdo</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      {/* {bookings.map((elem) => {
        return (
          <div>
            {elem.customers.map((i) => {
              return <div>{i.firstName}</div>;
            })}
          </div>
        );
      })} */}
    </div>
  );
}

export default BookingUserBasket;

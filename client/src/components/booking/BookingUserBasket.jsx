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
  const [flagColorTable, setFlagColorTable] = useState(false);
  const [show, setShow] = useState(false);
  const bookings = useSelector((state) => state.customer.booking);
  console.log("bookings: ", bookings);

  //setBookingUser(bookingUser)

  useEffect(() => {
    setBookingUser([...bookingUser]);
  }, [bookings]);
  console.log("bookingUser: ", bookingUser);

  return (
    <div>
      <div className="d-flex justify-content-center row gy-3 m-lg-2 gap-2 m-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Название тура</th>
              <th>Тип тура</th>
              <th>Страна</th>
              <th>Город</th>
              <th>Дата</th>
              <th>Длительность</th>
              <th>Цена $</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((elem) => {
              return (
                <tr>
                  <td>1</td>
                  <td>
                    
                  </td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      {bookings.map((elem) => {
        return (
          <div>
            {elem.customers.map((i) => {
              return <div>{i.firstName}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default BookingUserBasket;

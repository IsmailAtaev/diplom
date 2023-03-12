import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTours } from "../../store/tourStore/tourSlice";
import TourItem from "./tourItem";
import { Button } from "react-bootstrap";
import Admin from "../admin/Admin";
import SideBarMenu from "../sidebar/SideBarMenu";

const styleT = {
  display: "flex",
  justifyContent: "center",
};

const styleAddTour = {
  width: "400px",
  borderRadius: "15px",
  marginRight: "10px",
};

const Tours = () => {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tour.tours);
  const [tour, setTour] = useState([]);

  useEffect(() => {
    dispatch(getTours());
  }, [tour]);

  return (
    <>
      <div className="d-flex justify-content-center row gy-3 m-lg-2 gap-2 m-4">
        <Admin />

        {tours.map((elem) => (
          <TourItem key={elem.id} tour={elem} />
        ))}
      </div>
    </>
  );
};

export default Tours;

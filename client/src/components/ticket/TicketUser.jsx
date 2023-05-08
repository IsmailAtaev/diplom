import { React, useEffect } from "react";
import { getTicketUser } from "../../store/user/userStore";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const TicketUser = () => {
  const dispatch = useDispatch();
  const ticket = useSelector((state) => state.user.ticket);
  const user = useSelector((state) => state.user.user.user);
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    if (trigger) {
      const ticketInfoUser = {
        email: user.email,
        userId: user.id,
      };
      dispatch(getTicketUser(ticketInfoUser));
      setTrigger(false);
    }
  }, [trigger]);

  return <div>{ticket.length > 0 ? ticket[0].flight : "netu biletov"}</div>;
};

export default TicketUser;

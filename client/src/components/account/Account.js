import React from "react";
import { useLocation } from "react-router-dom";

const Account = () => {
  const location = useLocation();
  const { user } = location.state;
  return (
    <div>
      Account
      <br />
      {user.nickName}
      <br />
      {user.role}
      <br />
      {user.email}
      <br />
      {user.isActivated}
      {user.id}
    </div>
  );
};

export default Account;

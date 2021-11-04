import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";

const Status = () => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session: ", session);
      setStatus(true);
    });
  }, []);

  return (
    <div>
      {status ? <li><a onClick={logout} href="/">Logout</a></li> : <li><a href="/login">Login</a></li>}
      {status ? <li><a href="/settings">Settings</a></li> : ""}
    </div>
  );
};
export default Status;

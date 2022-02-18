import React, { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import FakeText from "./FakeText";

const Contact = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <Fragment>
      <h1>Contact</h1>
      <hr />
      <button onClick={() => history.push("/")}>Go to home</button>
      <p>Current URL: {pathname}</p>
      <FakeText />
    </Fragment>
  );
};

export default Contact;

import React, { Fragment } from "react";

import { BrowserRouter as Route, Redirect, useParams } from "react-router-dom";

import Contact from "./Contact";

const About = () => {
  const { name } = useParams();
  return (
    // props.match.params.name
    <Fragment>
      {name !== "John Doe" ? <Redirect to="/" /> : null}
      <h1>About {name}</h1>
      <Route component={Contact} />
    </Fragment>
  );
};

export default About;

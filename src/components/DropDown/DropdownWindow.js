import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../Pages/Home";
import About from "../Pages/About";
import { BrowserRouter as Router } from "react-router-dom";

const DropdownWindow = (props) => {
  const { currFocus } = props;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home currFocus={currFocus} />
        </Route>
        <Route exact path="/HOME">
          <Home currFocus={currFocus} />
        </Route>
        <Route exact path="/ABOUT">
          <About currFocus={currFocus} />
        </Route>
      </Switch>
    </Router>
  );
};

export default DropdownWindow;

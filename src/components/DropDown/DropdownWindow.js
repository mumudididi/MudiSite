import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../Pages/Home";
import About from "../Pages/About";
import { BrowserRouter as Router } from "react-router-dom";
const DropdownContainer = styled.div`
  height: 80vh;
  min-width: 50vw;
  border: 1px black solid;
  background-color: rgba(10, 10, 10, 0.7);
  color: white;
  /* position: absolute; */
`;
const DropdownWindow = (props) => {
  const { currFocus } = props;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <DropdownContainer>
            <Home currFocus={currFocus} />
          </DropdownContainer>
        </Route>
        <Route exact path="/HOME">
          <DropdownContainer>
            <Home currFocus={currFocus} />
          </DropdownContainer>
        </Route>
        <Route exact path="/ABOUT">
          <DropdownContainer>
            <About currFocus={currFocus} />
          </DropdownContainer>
        </Route>
      </Switch>
    </Router>
  );
};

export default DropdownWindow;

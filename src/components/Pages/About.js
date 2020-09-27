import React from "react";
import ScrollableDropDownContainer from "../DropDown/ScrollableDropdownContainer";

const About = (props) => {
  return (
    <ScrollableDropDownContainer
      style={{ color: "white", height: "50vh", width: "50vw" }}
      handleClose={props.handleClose}
    >
      {props.currFocus}
      Asjkfsdklfldf
    </ScrollableDropDownContainer>
  );
};

export default About;

import React from "react";
import ScrollableDropdownContainer from "../DropDown/ScrollableDropdownContainer";
import HeadLine from "./sharedComponent/HeadLine";
import ContentContainer from "./sharedComponent/ContentContainer";
import Card from "./sharedComponent/Card";

const Experience = (props) => {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const h = windowWidth >= 768 ? windowHeight * 0.6 : windowHeight * 0.65;
  const w = windowWidth >= 768 ? windowWidth * 0.4 : windowWidth * 0.8;
  return (
    <ScrollableDropdownContainer
      style={{
        color: "white",
        height: `${h}px`,
        width: `${w}px`,
      }}
      {...props}
    >
      <HeadLine>
        <p
          style={{
            fontSize: "2.7rem",
            color: "#ffd500",
            fontWeight: "normal",
          }}
        >
          Experience
        </p>
      </HeadLine>
      <ContentContainer style={{ width: "100%" }}>
        <Card>
          Software Development Intern @ Amazon
          <p> Jun 2020 - Sep 2020</p>
        </Card>
        <Card>
          Amath301 Teaching Assistant @ UW -Seattle
          <p> Sep 2019 - March 2020</p>
        </Card>
      </ContentContainer>
    </ScrollableDropdownContainer>
  );
};

export default Experience;

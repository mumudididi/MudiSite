import React from "react";
import ScrollableDropdownContainer from "../DropDown/ScrollableDropdownContainer";
import HeadLine from "./sharedComponent/HeadLine";
import ContentContainer from "./sharedComponent/ContentContainer";
import Card from "./sharedComponent/Card";

const Experience = (props) => {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const h = windowWidth >= 768 ? windowHeight * 0.6 : windowHeight * 0.65;
  const w = windowWidth >= 768 ? windowWidth * 0.6 : windowWidth * 0.8;
  return (
    <ScrollableDropdownContainer
      style={{ color: "white", height: `${h}px`, width: `${w}px` }}
      {...props}
    >
      <HeadLine>
        <p
          style={{
            fontSize: "2.4rem",
            color: "white",
            fontWeight: "normal",
          }}
        >
          Experience
        </p>
      </HeadLine>
      <ContentContainer style={{ width: "100%" }}>
        <Card />
      </ContentContainer>
    </ScrollableDropdownContainer>
  );
};

export default Experience;

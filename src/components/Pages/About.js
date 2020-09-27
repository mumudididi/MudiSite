import React from "react";
import ScrollableDropDownContainer from "../DropDown/ScrollableDropdownContainer";
import HeadLine from "../Pages/sharedComponent/HeadLine";
import ContentContainer from "../Pages/sharedComponent/ContentContainer";
const About = (props) => {
  return (
    <ScrollableDropDownContainer
      style={{ color: "white", height: "65vh", width: "60vw" }}
      handleClose={props.handleClose}
    >
      <HeadLine>
        <p style={{ fontSize: "2.3rem" }}>
          A little bit more about{" "}
          <span
            style={{
              fontSize: "2.5rem",
              color: "#ffd500",
              textShadow: "4px 4px 4px #ccc",
              fontWeight: "bold",
            }}
          >
            me
          </span>{" "}
          (◍•ᴗ•◍)❤
        </p>
      </HeadLine>
      <ContentContainer style={{ fontSize: "1.8rem" }}>
        <p>
          I am a <span style={{ color: "#ffd500" }}>Math</span> major by
          profession, and a{" "}
          <span style={{ color: "#ffd500" }}>software developer</span> at heart
          ♥.
        </p>
        <p style={{ fontWeight: "bold", textShadow: "2px 2px 2px #ccc" }}>
          Background
          <span style={{ fontWeight: "normal", textShadow: "none" }}>
            ヾ(๑╹ヮ╹๑)ﾉ”{" "}
          </span>
        </p>
        <p>
          I received my undergrad degree in Mathematics from{" "}
          <span style={{ color: "#ffd500" }}>
            University of Maryland -College Park
          </span>{" "}
          and, I am currently pursuing an Applied Math degree at{" "}
          <span style={{ color: "#ffd500" }}>
            {" "}
            University of Washing -Seattle
          </span>
        </p>
        Fun fact about me --I love cooking but I hate doing dishes
      </ContentContainer>
    </ScrollableDropDownContainer>
  );
};

export default About;

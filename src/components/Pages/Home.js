import React from "react";
import ScrollableDropdownContainer from "../DropDown/ScrollableDropdownContainer";
import HeadLine from "./sharedComponent/HeadLine";
import ContentContainer from "./sharedComponent/ContentContainer";

const Home = (props) => {
  const h = window.innerHeight * 0.5;
  const w = window.innerWidth * 0.5;
  return (
    <ScrollableDropdownContainer
      style={{ color: "white", height: `${h}px`, width: `${w}px` }}
      {...props}
    >
      <HeadLine>
        <p
          style={{
            fontSize: "2rem",
            color: "rgba(227, 214, 138, 0.5)",
            fontWeight: "lighter",
          }}
        >
          (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧{" "}
          <span
            style={{
              fontSize: "2.5rem",
              color: "#ffd500",
              textShadow: "1px 1px 4px #ccc",
              fontWeight: "bold",
            }}
          >
            Chuanmudi Qin
          </span>{" "}
          ✧ﾟ･: *ヽ(◕ヮ◕ヽ)
        </p>
      </HeadLine>
      <ContentContainer style={{ fontSize: "1.6rem" }}>
        Hello visitors! You just hit{" "}
        <span style={{ color: "#ffd500" }}>Mudi </span>
        's website ~ヾ(＾∇＾). <br />
        I am a graduate student@UW and incoming SDE@Amazon. <br /> This site is
        still under development -in the meantime, feel free to mess around with
        everything here on the page! ~(˘▾˘~)
        <br /> ཥ•̫͡•ཤ <br />{" "}
        <p style={{ fontSize: "1rem" }}> Sat, Sep 26 2020 </p>
      </ContentContainer>
    </ScrollableDropdownContainer>
  );
};

export default Home;

import React from "react";
import ScrollableDropdownContainer from "../DropDown/ScrollableDropdownContainer";
import HeadLine from "./sharedComponent/HeadLine";
import ContentContainer from "./sharedComponent/ContentContainer";

const Home = (props) => {
  return (
    <ScrollableDropdownContainer
      style={{ color: "white", height: "50vh", width: "45vw" }}
    >
      <HeadLine>
        <p
          style={{ fontSize: "2rem", color: "#d8ebe8", fontWeight: "lighter" }}
        >
          (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧{" "}
          <span
            style={{
              fontSize: "6rem",
              color: "#ffd500",
              fontFamily: "Tangerine",
              textShadow: "4px 4px 4px #ccc",
              fontWeight: "bold",
            }}
          >
            Mudi
          </span>{" "}
          ✧ﾟ･: *ヽ(◕ヮ◕ヽ)
        </p>
      </HeadLine>
      <ContentContainer style={{ fontSize: "2rem" }}>
        Hello visitors! You have reached{" "}
        <span style={{ color: "#ffd500" }}>Mudi</span>
        's website. abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
        abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
        abcdefghijklmnopqrstuvwxyz
        abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
        abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
        abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
        abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
      </ContentContainer>
    </ScrollableDropdownContainer>
  );
};

export default Home;

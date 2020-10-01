import React from "react";
import ScrollableDropDownContainer from "../DropDown/ScrollableDropdownContainer";
import HeadLine from "../Pages/sharedComponent/HeadLine";
import ContentContainer from "../Pages/sharedComponent/ContentContainer";
const About = (props) => {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const h = windowWidth >= 768 ? windowHeight * 0.7 : windowHeight * 0.75;
  const w = windowWidth >= 768 ? windowWidth * 0.6 : windowWidth * 0.7;
  return (
    <ScrollableDropDownContainer
      style={{ color: "white", height: `${h}px`, width: `${w}px` }}
      {...props}
    >
      <HeadLine>
        <p style={{ fontSize: "2.4rem" }}>
          About{" "}
          <span
            style={{
              fontSize: "2.4rem",
              color: "#ffd500",
              textShadow: "2px 2px 2px #ccc",
              fontWeight: "bold",
            }}
          >
            me
          </span>{" "}
          (◍•ᴗ•◍)❤
        </p>
      </HeadLine>
      <ContentContainer style={{ fontSize: "1.6rem" }}>
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
            University of Washington -Seattle
          </span>
        </p>
        <p style={{ fontWeight: "bold", textShadow: "2px 2px 2px #ccc" }}>
          Skills...?
          <span style={{ fontWeight: "normal", textShadow: "none" }}>
            {" "}
            ヾ(≧∇≦)ゞ
          </span>
        </p>
        <p>
          <strike>I make really good curry</strike>. Proficient in but not
          limited to{" "}
          <span style={{ color: "#ffd500" }}>
            Java, Python, SQL, Javascript, Shell, Html, CSS, Latex...
          </span>{" "}
          I do my daily work on a Linux machine{" "}
          <span style={{ color: "red" }}>( </span> which is my only laptop right
          now, I hope I can afford a Mac pro in the future{" "}
          <span style={{ color: "red" }}>) </span>. Familiar with Software
          development process. Specialized in Data analytics and visualization.
        </p>
        <p
          style={{
            fontWeight: "bold",
            textShadow: "2px 2px 2px #ccc",
          }}
        >
          I am hunting for{" "}
          <span style={{ fontWeight: "normal", textShadow: "none" }}>
            {" "}
            ╰༼⇀︿⇀༽つ-]═──
          </span>{" "}
          <span style={{ color: "tomato", textShadow: "1px 1px 1px coral" }}>
            {" "}
            bread and butter{" "}
          </span>
        </p>
        <p>
          I am primarily looking for a{" "}
          <span style={{ color: "#ffd500" }}>
            software development engineer / site reliability engineer
          </span>{" "}
          position, or any positions related to{" "}
          <span style={{ color: "#ffd500" }}>
            Data Science or Data Analytics
          </span>
          .{" "}
        </p>
        <p style={{ fontWeight: "bold", textShadow: "2px 2px 2px #ccc" }}>
          <span style={{ fontWeight: "normal", textShadow: "none" }}>
            {" "}
            ◟ʕ´∀`ʔ◞{" "}
          </span>
          Some fun facts and random stuff
          <span style={{ fontWeight: "normal", textShadow: "none" }}>
            {" "}
            ◟ʕ´∀`ʔ ◞
          </span>
        </p>
        <p>
          I am a big CAT lover and I do well with all cats. <br />
          And I love cooking but hate doing dishes. <br />
          And as you can tell, I am MARRIED WITH emoticons Ｏ(≧▽≦)Ｏ
        </p>
      </ContentContainer>
    </ScrollableDropDownContainer>
  );
};

export default About;

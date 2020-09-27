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
          I do my daily work on a Linux machine( which is my only laptop right
          now, I hope I can afford a Mac pro in the future.) and Arch is my
          favorite distro. Familiar with Software development process.
          Specialized in Data analytics and visualization.
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
          <span style={{ color: "tomato", textShadow: "2px 2px 2px coral" }}>
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
            •̫͡•ʔʕ•̫͡•ʕ•̫͡•ʔ{" "}
          </span>
          Some fun facts and random stuff
          <span style={{ fontWeight: "normal", textShadow: "none" }}>
            {" "}
            ◟ʕ´∀`ʔ◞◟ʕ´∀`ʔ ◞
          </span>
        </p>
        <p>
          I am big CAT lover and I do well with all cats (=ↀωↀ=)✧. <br />
          And I love cooking but hate doing dishes =͟͟͞͞(꒪ᗜ꒪ ‧̣̥̇) <br />
          And as you can tell, I am MARRIED WITH emoticons Ｏ(≧▽≦)Ｏ
        </p>
      </ContentContainer>
    </ScrollableDropDownContainer>
  );
};

export default About;

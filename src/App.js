import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import NavIcon from "./components/Nav/NavIcon";
import NavIconWrapper from "./components/Nav/NavIconWrapper";
import BGImg from "./data/image/bg3.jpg";
// import DropdownWindow from "./components/DropDown/DropdownWindow";

import { Link, Switch, Route, Router } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";

const GlobalStyle = createGlobalStyle`
  body {
    /* background: rgba(50,50,50,0.5); */
    margin:0;
    padding:0;
    box-sizing: border-box;
    overflow: hidden;
  }
`;

const MainWrapper = styled.div`
  background-image: url(${BGImg});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

const DropdownWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
`;

function App() {
  const sections = ["HOME", "ABOUT", "EXPERIENCE", "CONTACT"];
  const [currFocus, setCurrFocus] = useState("HOME");
  const [longPressTarget, setLongPressTarget] = useState();
  const [isDropDownOpen, setDropDownVisibility] = useState(false);
  const initailDistanceToRight = window.innerWidth;

  const [HomeIconProps, setHomeIconProps] = useState({
    pos: { left: 0.1 * initailDistanceToRight, top: 100 },
    // pos: { right: initailDistanceToRight, top: 100 },
    posOffSet: { diffX: 0, diffY: 0 },
  });

  const [AboutIconProps, setAboutIconProps] = useState({
    // pos: { right: initailDistanceToRight, top: 250 },
    pos: { left: 0.2 * initailDistanceToRight, top: 250 },
    posOffSet: { diffX: 0, diffY: 0 },
  });
  const [ExperienceIconProps, setExperienceIconProps] = useState({
    // pos: { right: initailDistanceToRight, top: 400 },
    pos: { left: 0.1 * initailDistanceToRight, top: 400 },
    posOffSet: { diffX: 0, diffY: 0 },
  });
  const [ContactIconProps, setContactIconProps] = useState({
    // pos: { right: initailDistanceToRight, top: 550 },
    pos: { left: 0.2 * initailDistanceToRight, top: 550 },
    posOffSet: { diffX: 0, diffY: 0 },
  });

  // const dropdown = isDropDownOpen ? (
  //   <DropdownWindow currFocus={currFocus} />
  // ) : null;

  // const [, updateState] = React.useState();
  // const forceUpdate = React.useCallback(() => updateState({}), []);
  //   forceUpdate();
  const dropdown = isDropDownOpen ? (
    <DropdownWrapper>
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
    </DropdownWrapper>
  ) : null;
  const handleMouseMove = (e) => {
    let callback, iconProps;
    if (longPressTarget) {
      switch (longPressTarget) {
        case "HOME":
          callback = setHomeIconProps;
          iconProps = HomeIconProps;
          break;
        case "ABOUT":
          callback = setAboutIconProps;
          iconProps = AboutIconProps;
          break;
        case "EXPERIENCE":
          callback = setExperienceIconProps;
          iconProps = ExperienceIconProps;
          break;
        case "CONTACT":
          callback = setContactIconProps;
          iconProps = ContactIconProps;
          break;
        default:
      }
      let t = e.pageY - iconProps.posOffSet.diffY;
      // let r = window.innerWidth - e.pageX - iconProps.posOffSet.diffX;
      let l = e.pageX - iconProps.posOffSet.diffX;
      callback({
        ...iconProps,
        pos: { left: l, top: t },
      });
    }
  };
  const setIconProps = [
    setHomeIconProps,
    setAboutIconProps,
    setExperienceIconProps,
    setContactIconProps,
  ];

  const iconProps = [
    HomeIconProps,
    AboutIconProps,
    ExperienceIconProps,
    ContactIconProps,
  ];
  return (
    <div className="App">
      <GlobalStyle />
      <MainWrapper onMouseMove={handleMouseMove}>
        {sections.map((section, index) => (
          <Link to={`/${section}`} key={index}>
            <NavIconWrapper
              setProps={setIconProps[index]}
              {...iconProps[index]}
              longPressTarget={longPressTarget}
              setLongPressTarget={setLongPressTarget}
            >
              <NavIcon
                sectionName={section}
                currFocus={currFocus}
                isDropDownOpen={isDropDownOpen}
                setCurrFocus={setCurrFocus}
                setDropDownVisibility={setDropDownVisibility}
                active={currFocus === section && isDropDownOpen}
                setLongPressTarget={setLongPressTarget}
                longPressTarget={longPressTarget}
              />
            </NavIconWrapper>
          </Link>
        ))}
        {dropdown}
      </MainWrapper>
    </div>
  );
}

export default App;

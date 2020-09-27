import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import NavIcon from "./components/Nav/NavIcon";
import NavIconWrapper from "./components/Nav/NavIconWrapper";
import BGImg from "./data/image/bg3.jpg";
// import DropdownWindow from "./components/DropDown/DropdownWindow";

import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    box-sizing: border-box;
    overflow: hidden;
    font-family: 'Indie Flower', cursive;
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

const DropdownWrapper = styled.div.attrs((props) => ({
  style: {
    top: props.pos.top + "px",
    left: props.pos.left + "px",
  },
}))`
  position: absolute;
`;

function App() {
  const sections = ["HOME", "ABOUT", "EXPERIENCE", "CONTACT"];
  const [currFocus, setCurrFocus] = useState("HOME");
  const [longPressTarget, setLongPressTarget] = useState();
  const [isDropDownOpen, setDropDownVisibility] = useState(false);
  const windowWidth = window.innerWidth;

  const [DropdownProps, setDropdownProps] = useState({
    pos: { left: 0.1 * windowWidth, top: 100 },
    posOffSet: { diffX: 0, diffY: 0 },
  });
  const [HomeIconProps, setHomeIconProps] = useState({
    pos: { left: 0 * windowWidth, top: 100 },
    posOffSet: { diffX: 0, diffY: 0 },
  });

  const [AboutIconProps, setAboutIconProps] = useState({
    pos: { left: 0 * windowWidth, top: 250 },
    posOffSet: { diffX: 0, diffY: 0 },
  });
  const [ExperienceIconProps, setExperienceIconProps] = useState({
    pos: { left: 0 * windowWidth, top: 400 },
    posOffSet: { diffX: 0, diffY: 0 },
  });
  const [ContactIconProps, setContactIconProps] = useState({
    pos: { left: 0 * windowWidth, top: 550 },
    posOffSet: { diffX: 0, diffY: 0 },
  });

  const handleMouseDown = (e, setProps, pos, posOffSet) => {
    e.preventDefault();
    let dX = e.pageX - e.currentTarget.getBoundingClientRect().left;
    let dY = e.pageY - e.currentTarget.getBoundingClientRect().top;
    setProps({
      pos,
      posOffSet: { diffX: dX, diffY: dY },
    });
  };

  const handleMouseUp = (setProps, pos, posOffSet) => {
    setLongPressTarget();
    setProps({
      pos,
      posOffSet: { diffX: 0, diffY: 0 },
    });
  };
  const handleClose = () => {
    setDropDownVisibility(false);
    setCurrFocus();
  };

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
        case "TitleContainer":
          callback = setDropdownProps;
          iconProps = DropdownProps;
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
  const dropdown = isDropDownOpen ? (
    <DropdownWrapper {...DropdownProps}>
      <Switch>
        <Route exact path="/">
          <Home
            currFocus={currFocus}
            handleClose={handleClose}
            handleMouseDown={(e, pos, posOffSet) =>
              handleMouseDown(e, setDropdownProps, pos, posOffSet)
            }
            handleMouseUp={(pos, posOffSet) =>
              handleMouseUp(setDropdownProps, pos, posOffSet)
            }
            {...DropdownProps}
            setLongPressTarget={setLongPressTarget}
          />
        </Route>
        <Route exact path="/HOME">
          <Home
            currFocus={currFocus}
            handleClose={handleClose}
            handleMouseDown={(e, pos, posOffSet) =>
              handleMouseDown(e, setDropdownProps, pos, posOffSet)
            }
            handleMouseUp={(pos, posOffSet) =>
              handleMouseUp(setDropdownProps, pos, posOffSet)
            }
            {...DropdownProps}
            setLongPressTarget={setLongPressTarget}
          />
          {/* <Home currFocus={currFocus} handleClose={handleClose} /> */}
        </Route>
        <Route exact path="/ABOUT">
          <About
            currFocus={currFocus}
            handleClose={handleClose}
            handleMouseDown={(e, pos, posOffSet) =>
              handleMouseDown(e, setDropdownProps, pos, posOffSet)
            }
            handleMouseUp={(pos, posOffSet) =>
              handleMouseUp(setDropdownProps, pos, posOffSet)
            }
            {...DropdownProps}
            setLongPressTarget={setLongPressTarget}
          />
        </Route>
      </Switch>
    </DropdownWrapper>
  ) : null;
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

//TODO: clean up handleMouseDown/Up functions
import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import NavIcon from "./components/Nav/NavIcon";
import NavIconWrapper from "./components/Nav/NavIconWrapper";
import BGImg from "./data/image/bg3.jpg";
// import DropdownWindow from "./components/DropDown/DropdownWindow";

import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";

const GlobalStyle = createGlobalStyle`
html {
font-size: 14px;

@media (max-width: 768px) {
  font-size: 12px;
}

@media (max-width: 500px) {
  font-size: 10px;
}
}
  body {
    margin:0;
    padding:0;
    box-sizing: border-box;
    overflow: hidden;
    font-family: 'Kalam', cursive;
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
  /* font-size: 50px; */
`;

const DropdownWrapper = styled.div.attrs((props) => ({
  style: {
    top: props.pos.top + "px",
    left: props.pos.left + "px",
  },
}))`
  position: absolute;
`;
const CopyRight = styled.div`
  position: absolute;
  color: #adff2f;
  background: none;
  bottom: 2%;
  left: 30%;
  text-align: center;
  font-size: 1rem;
  white-space: nowrap;
`;
function App() {
  const sections = ["home", "about", "experience", "contact"];
  const [currFocus, setCurrFocus] = useState("home");
  const [longPressTarget, setLongPressTarget] = useState();
  const [isDropDownOpen, setDropDownVisibility] = useState(false);
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const rowInterval = windowWidth <= 768 ? windowWidth / 12 : 0;
  const columnInterval = windowWidth <= 768 ? 0 : windowHeight / 9;

  const [DropdownProps, setDropdownProps] = useState({
    pos: { left: 0.2 * windowWidth, top: (1.5 * windowHeight) / 9 },
    posOffSet: { diffX: 0, diffY: 0 },
  });
  const [HomeIconProps, setHomeIconProps] = useState({
    pos: { left: 0 * rowInterval, top: 1 * columnInterval },
    posOffSet: { diffX: 0, diffY: 0 },
  });

  const [AboutIconProps, setAboutIconProps] = useState({
    pos: { left: 2 * rowInterval, top: 3 * columnInterval },
    posOffSet: { diffX: 0, diffY: 0 },
  });
  const [ExperienceIconProps, setExperienceIconProps] = useState({
    pos: { left: 4 * rowInterval, top: 5 * columnInterval },
    posOffSet: { diffX: 0, diffY: 0 },
  });
  const [ContactIconProps, setContactIconProps] = useState({
    pos: { left: 6 * rowInterval, top: 7 * columnInterval },
    posOffSet: { diffX: 0, diffY: 0 },
  });

  const handleMouseDown = (e, setProps, Props) => {
    const { pos } = Props;
    e.preventDefault();
    let dX = e.pageX - e.currentTarget.getBoundingClientRect().left;
    let dY = e.pageY - e.currentTarget.getBoundingClientRect().top;
    setProps({
      pos,
      posOffSet: { diffX: dX, diffY: dY },
    });
  };

  const handleMouseUp = (setProps, Props) => {
    const { pos } = Props;
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
        case "home":
          callback = setHomeIconProps;
          iconProps = HomeIconProps;
          break;
        case "about":
          callback = setAboutIconProps;
          iconProps = AboutIconProps;
          break;
        case "experience":
          callback = setExperienceIconProps;
          iconProps = ExperienceIconProps;
          break;
        case "contact":
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

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        console.log("Close");
        setLongPressTarget();
        setCurrFocus();
        setDropDownVisibility(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const dropdown = isDropDownOpen ? (
    <DropdownWrapper {...DropdownProps}>
      <Switch>
        <Route exact path="/">
          <Home
            currFocus={currFocus}
            handleClose={handleClose}
            handleMouseDown={(e, Props) =>
              handleMouseDown(e, setDropdownProps, Props)
            }
            handleMouseUp={(Props) => handleMouseUp(setDropdownProps, Props)}
            Props={DropdownProps}
            setLongPressTarget={setLongPressTarget}
          />
        </Route>
        <Route exact path="/home">
          <Home
            currFocus={currFocus}
            handleClose={handleClose}
            handleMouseDown={(e, Props) =>
              handleMouseDown(e, setDropdownProps, Props)
            }
            handleMouseUp={(Props) => handleMouseUp(setDropdownProps, Props)}
            Props={DropdownProps}
            setLongPressTarget={setLongPressTarget}
          />
          {/* <Home currFocus={currFocus} handleClose={handleClose} /> */}
        </Route>
        <Route exact path="/about">
          <About
            currFocus={currFocus}
            handleClose={handleClose}
            handleMouseDown={(e, Props) =>
              handleMouseDown(e, setDropdownProps, Props)
            }
            handleMouseUp={(Props) => handleMouseUp(setDropdownProps, Props)}
            Props={DropdownProps}
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
              Props={iconProps[index]}
              longPressTarget={longPressTarget}
              setLongPressTarget={setLongPressTarget}
              handleMouseDown={handleMouseDown}
              handleMouseUp={handleMouseUp}
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
        <CopyRight>
          <p>made by Chuanmudi Qin ٩(◦`꒳´◦)۶ &#169; 2020</p>
        </CopyRight>
      </MainWrapper>
    </div>
  );
}

export default App;

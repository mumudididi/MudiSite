import React from "react";
import styled from "styled-components";
// import {material, octicons} from 'styled-icons'

const Wrapper = styled.div.attrs((props) => ({
  style: {
    top: props.top + "px",
    left: props.left + "px",
    // right: props.right + "px",
  },
}))`
  position: absolute;
  height: 70px;
  width: 100px;
  background: none;
  z-index: 99;
  cursor: grab;
`;

const NavIconWrapper = (props) => {
  const { setLongPressTarget, setProps, posOffSet, pos, children } = props;
  const handleMouseDown = (e) => {
    e.preventDefault();
    let dX = e.pageX - e.currentTarget.getBoundingClientRect().left;
    let dY = e.pageY - e.currentTarget.getBoundingClientRect().top;
    setProps({
      pos,
      posOffSet: { diffX: dX, diffY: dY },
    });
  };

  const handleMouseUp = () => {
    setLongPressTarget();
    setProps({
      posOffSet,
      pos: { diffX: 0, diffY: 0 },
    });
  };

  return (
    <Wrapper onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} {...pos}>
      {children}
    </Wrapper>
  );
};

export default NavIconWrapper;

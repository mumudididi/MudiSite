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
  height: 3rem;
  width: 5rem;
  background: none;
  z-index: 99;
  cursor: grab;
  margin: 1rem;
`;

const NavIconWrapper = (props) => {
  const { handleMouseDown, handleMouseUp, setProps, Props, children } = props;
  return (
    <Wrapper
      onMouseDown={(e) => handleMouseDown(e, setProps, Props)}
      onMouseUp={() => handleMouseUp(setProps, Props)}
      {...Props.pos}
    >
      {children}
    </Wrapper>
  );
};

export default NavIconWrapper;

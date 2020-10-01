import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  height: 5%;
  min-height: 2rem;
  width: 100%;
  border-bottom: 1px white solid;
  display: inline-flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  cursor: grab;
`;

const TitleButton = styled.button`
  border: none;
  height: 0.9rem;
  width: 0.5rem;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
`;
const ScrollContentContainer = styled.div`
  height: 95%;
  width: 100%;
  bottom: 0;
  border: none;
  overflow: scroll;
  scrollbar-color: #72ccdb #e0728f;
  scrollbar-width: thin;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::-webkit-scrollbar {
    color: #72ccdb;
    border: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #72ccdb;
    border-radius: 2rem;
  }
  &::-webkit-scrollbar-corner {
    border: none;
    background-color: none;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
    border: 1px red dashed;
    background-color: #e0728f;
  }
  &::-moz-scrollbar {
    color: #72ccdb;
    border: none;
  }
  &::-moz-scrollbar-thumb {
    background: #72ccdb;
    border-radius: 2rem;
  }
  &::-moz-scrollbar-track {
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
    border: 1px red dashed;
    background-color: #e0728f;
  }
`;

const DropdownContainer = styled.div.attrs((props) => ({
  style: props.style,
}))`
  position: relative;
  border: 0.2rem #e094a8 solid;
  background-color: rgba(0, 0, 30, 0.9);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  color: white;
  text-align: center;
`;

const ScrollableDropdownContainer = (props) => {
  const {
    setLongPressTarget,
    handleClose,
    handleMouseUp,
    handleMouseDown,
    Props,
  } = props;

  return (
    <DropdownContainer style={props.style}>
      <TitleContainer
        onMouseDown={(e) => {
          handleMouseDown(e, Props);
          setLongPressTarget("TitleContainer");
        }}
        onMouseUp={() => handleMouseUp(Props)}
        onTouchStart={(e) => {
          handleMouseDown(e, Props);
          setLongPressTarget("TitleContainer");
        }}
        onTouchEnd={() => handleMouseUp(Props)}
      >
        <TitleButton
          style={{ background: "red", left: "1rem" }}
          onClick={handleClose}
        />
      </TitleContainer>
      <ScrollContentContainer>{props.children}</ScrollContentContainer>
    </DropdownContainer>
  );
};
export default ScrollableDropdownContainer;

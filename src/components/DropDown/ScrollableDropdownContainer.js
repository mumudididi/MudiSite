import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  height: 10%;
  width: 100%;
  border: none;
`;
const ScrollContentContainer = styled.div`
  height: 90%;
  width: 100%;
  /* position:absolute; */
  bottom: 0;
  border: none;
  overflow: scroll;
  scrollbar-color: #72ccdb #e0728f;
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
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
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
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
    border: 1px red dashed;
    background-color: #e0728f;
  }
`;

const DropdownContainer = styled.div`
  padding-left: 1rem;
  position: relative;
  height: 60vh;
  width: 55vw;
  border: 4px #e094a8 solid;
  background-color: rgba(0, 0, 30, 0.9);
  border-radius: 2rem;
  display: inline-block;
  overflow: hidden;

  color: white;
  text-align: center;
`;

const ScrollableDropdownContainer = (props) => {
  return (
    <DropdownContainer>
      <TitleContainer />
      <ScrollContentContainer>{props.children}</ScrollContentContainer>
    </DropdownContainer>
  );
};
export default ScrollableDropdownContainer;

import React from "react";
import styled from "styled-components";

import useLongPress from "../../utils/useLongPress";
// import useForceUpdate from "use-force-update";

import { Folder } from "@styled-icons/boxicons-solid/Folder";
import { FolderOpen } from "@styled-icons/boxicons-solid/FolderOpen";

const StyledButton = styled.button`
  color: white;
  background: none;
  border: none;
  height: 100%;
  width: 100%;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: rotate(30deg);
    transition: all 0.4s ease-in-out;
  }
  font-family: "Indie Flower", cursive;
  font-size: 1.3rem;
  font-weight: bold;
`;

const YellowFolder = styled(Folder)`
  color: #d4a900;
`;
const PinkFolderOpen = styled(FolderOpen)`
  color: #de2b4c;
  transform: scale(1.3);
`;

const NavIcon = (props) => {
  const {
    currFocus,
    sectionName,
    isDropDownOpen,
    setCurrFocus,
    setDropDownVisibility,
    active,
    setLongPressTarget,
  } = props;

  const handleClick = (e, nextSection) => {
    setCurrFocus(nextSection);
    handleToggleDropDown();
  };

  const handleToggleDropDown = () => {
    if (sectionName === currFocus) {
      setDropDownVisibility(!isDropDownOpen);
    } else {
      setDropDownVisibility(true);
    }
  };

  const handleLongPress = () => {
    setLongPressTarget(sectionName);
  };

  const longPress = useLongPress(handleLongPress, 200);

  const folder = props.active ? (
    <PinkFolderOpen size="60" title={sectionName} />
  ) : (
    <YellowFolder size="60" />
  );
  return (
    <div>
      <StyledButton
        onClick={(e) => handleClick(e, sectionName)}
        active={active}
        {...longPress}
      >
        {folder}
        {sectionName}
      </StyledButton>
    </div>
  );
};

export default NavIcon;

import React, { useState } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: #e0728f;
  /* background: #72ccdb; */
  width: 95%;
  border: none;
  margin: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: none;
  margin: none;
`;

const Overview = styled.div`
  color: black;
  /* margin: 1rem; */
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & .title {
    display: flex;
    flex-direction: row;
    height: 2rem;
  }
`;

const Title = styled.h3`
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
`;

const Date = styled.div`
  font-size: 1.2rem;
  margin-left: 6rem;
  color: darkblue;
`;

const Card = (props) => {
  console.log(props.children);
  const [isDetailDisplayed, setDetailDisplay] = useState(false);
  const displaySymbol = isDetailDisplayed ? (
    <Title> [-] </Title>
  ) : (
    <Title> [+] </Title>
  );
  return (
    <CardWrapper>
      <Overview>
        <div
          className="title"
          onClick={() => setDetailDisplay(!isDetailDisplayed)}
        >
          {displaySymbol}
          <Title> {props.children[0]} </Title>
        </div>
        <Date> {props.children[1]}</Date>
      </Overview>
    </CardWrapper>
  );
};
export default Card;

import React, { useState } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: #e0728f;
  width: 95%;
  border: none;
  margin: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Overview = styled.div`
  color: black;
  margin: 1rem;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;

  & .title {
    display: flex;
    flex-direction: row;
  }
`;

const Title = styled.h3`
  margin: 1rem;
`;

const Card = (props) => {
  const [isDetailDisplayed, setDetailDisplay] = useState(false);
  const displaySymbol = isDetailDisplayed ? (
    <Title> [-] </Title>
  ) : (
    <Title> [+] </Title>
  );
  return (
    <CardWrapper>
      <Overview>
        <div className="title">
          {displaySymbol}
          <Title> SDE Intern @ Amazon </Title>
        </div>
      </Overview>
    </CardWrapper>
  );
};
export default Card;

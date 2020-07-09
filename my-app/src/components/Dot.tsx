import React from "react";
import styled from "styled-components";

type Props = {
  white?: string;
};

const Buttons = styled.div`
  padding: 0.5rem 0;
  background: ${(props: Props) =>
    props && props.white ? "white" : "transparent"};
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.25);
  width: 4rem;
  height: 3rem;
  text-decoration: none;

  @media (max-width: 1024px) {
    background: ${(props) => (props.white ? "white" : "transparent")};
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.25);
    width: 16px;
    height: 4px;
    text-decoration: none;
  }
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  color: white;
  height: 66px;
`;

const Dots = styled.div`
  display: inline-flex;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Dot: React.FC = () => {
  return (
    <Dots>
      <Buttons white={"white"}></Buttons>
      <Line>------</Line>
      <Buttons></Buttons>
      <Line>------</Line>
      <Buttons white={"white"}></Buttons>
      <Line>------</Line> <Buttons white={"white"}></Buttons>
      <Line>------</Line> <Buttons></Buttons>
    </Dots>
  );
};

export default Dot;

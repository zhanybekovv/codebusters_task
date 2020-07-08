import React from "react";
import styled from "styled-components";

const Buttons = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1024px) {
    order: 3;
    padding-top: 30px;
  }
`;

const Label = styled.label`
  align-items: center;
  background-color: #ff8f66;
  border: 3px solid transparent;
  box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.1),
    -3px -3px 3px 3px rgba(248, 142, 93, 0.5),
    3px 3px 8px 2px rgba(0, 0, 0, 0) inset,
    -3px -3px 7px 2px rgba(235, 161, 64, 0) inset;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 1.5em;
  height: 16rem;
  justify-content: center;
  position: relative;
  width: 16rem;
  border-radius: 50%;

  @media (max-width: 1024px) {
    order: 3;
    width: 10rem;
    height: 10rem;
  }
`;

const Button: React.FC = () => {
  return (
    <Buttons>
      <Label>
        <p>Начать</p>
      </Label>
    </Buttons>
  );
};

export default Button;

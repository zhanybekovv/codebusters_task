import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Text from "./Text";
import Logo from "./Logo";
import Dot from "./Dot";

const Main = styled.div`
  background: #ff8f66;
  margin: 15px 30px 0px 30px;

  @media (max-width: 1024px) {
    margin: 3px 10px 0px 10px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const Body = styled.div`
  padding: 8rem;

  @media (max-width: 1024px) {
    padding: 1rem;
    height: 100%;
  }
`;

const SecondLine = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Line = styled.div`
  background: blue;
  height: 30px;
  width: 100%;
`;

const MainView: React.FC = () => {
  return (
    <div>
      <Main>
        <Body>
          <Text></Text>
          <SecondLine>
            <Button></Button>
            <Dot></Dot>
            <Logo></Logo>
          </SecondLine>
        </Body>
        <Line></Line>
      </Main>
    </div>
  );
};

export default MainView;

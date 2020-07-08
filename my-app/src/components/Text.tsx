import React from "react";
import styled from "styled-components";

const Bold = styled.p`
  color: white;
  font-size: 5.5rem;
  @media (max-width: 1024px) {
    font-size: 30px;
  }
`;

const Text: React.FC = () => {
  return (
    <Bold>
      <b>Каждый </b>
      <i>ученик занимается в своём </i>
      <b>собственном </b> <i>темпе </i>
      <b>
        сначала восполняя пробелы в понимании материала, а затем углубляя свои
        знания.{" "}
      </b>
    </Bold>
  );
};

export default Text;

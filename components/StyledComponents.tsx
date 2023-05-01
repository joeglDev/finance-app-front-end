import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem;
`;

export const SecondaryTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem;
`;

export const MainText = styled.p`
  text-align: center;
`;

export const ListAsGridContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10%;
  grid-row-gap: 3rem;
  text-align: center;
  font-weight: bold;
`;

export const Card = styled.li`
  background-color: #f2eecb;
  list-style: none;
  width: 80%;
  padding: 5%;
  &:hover {
    background-color: lightblue;
  }
`;

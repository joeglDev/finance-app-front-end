import styled from "styled-components";
import { Colours } from "../colours.constants";

export const Nav = styled.nav`
  width: 100%;
  margin: 0 0 5rem 0;
`;

export const NavUl = styled.ul`
  list-style-type: none;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 0 1rem 0;
  background-color: ${Colours.BACKGROUND_DARK};
`;

export const NavLi = styled.li`
  float: center;
  fill: ${Colours.BACKGROUND_DARK};
`;

export const NavLink = styled.a`
  display: inline-block;
  text-align: center;
  padding: 1rem;
  text-decoration: none;
  text-weight: bold;
  color: white;
  &:hover {
    background-color: ${Colours.HIGHLIGHT};
    color: black;
  }
`;

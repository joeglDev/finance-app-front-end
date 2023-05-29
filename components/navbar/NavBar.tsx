import Link from "next/link";
import { Nav, NavLi, NavLink, NavUl } from "./navbar.style";

/*
Annoyingly this NavBar will need to be present in each page.
Could be splved by disabling default page routing and creating a custom router to render pages in below this component of a main page.
*/
export const NavBar = () => {
  return (
    <Nav>
      <NavUl>
        <NavLi>
          <NavLink href="/About"> About</NavLink>
          <NavLink href="/Portfolios">Your portfolios</NavLink>
        </NavLi>
      </NavUl>
    </Nav>
  );
};

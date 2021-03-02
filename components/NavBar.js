import Link from "next/link";
import styled from "styled-components";
import UnstyledLink from "./styled/UnstyledLink";

const Nav = styled.nav`
  /* background: #15171b; */
  padding: 2rem;
  color: #ffffff;
  padding-bottom: 0;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
`;

const Navbar = () => {
  const handleClick = () => {};

  return (
    <Nav>
      <NavContainer>
        <Link href="/">
          <UnstyledLink>About</UnstyledLink>
        </Link>
        <Link href="/projects">
          <UnstyledLink>Projects</UnstyledLink>
        </Link>
        <Link href="/contact">
          <UnstyledLink>Contact</UnstyledLink>
        </Link>
        <Link href="/resume">
          <UnstyledLink>Resume</UnstyledLink>
        </Link>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

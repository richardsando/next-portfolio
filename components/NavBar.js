import Link from "next/link";
import styled from "styled-components";
import UnstyledLink from "./styled/UnstyledLink";

const Nav = styled.nav`
  padding: 2vh;
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
          <UnstyledLink>Home</UnstyledLink>
        </Link>
        <Link href="/about">
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

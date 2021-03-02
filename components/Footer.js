import styled from "styled-components";
import UnstyledLink from "../components/styled/UnstyledLink";
import Link from "next/link";
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaVimeoV } from "react-icons/fa";

const FooterWrapper = styled.nav`
  position: fixed;
  color: #ffffff;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 10px;
  margin: 0 auto;
  align-items: center;
  min-width: 80%;
  left: 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <UnstyledLink href="https://github.com/richardsando">
        <AiFillGithub style={{ fontSize: "2.5rem" }} />
      </UnstyledLink>

      <UnstyledLink>
        <AiFillLinkedin style={{ fontSize: "2.5rem" }} />
      </UnstyledLink>
      <UnstyledLink href="https://twitter.com/richardsando369">
        <AiOutlineTwitter style={{ fontSize: "2.5rem" }} />
      </UnstyledLink>

      <UnstyledLink>
        <FaVimeoV style={{ fontSize: "2.5rem" }} />
      </UnstyledLink>
    </FooterWrapper>
  );
};

export default Footer;

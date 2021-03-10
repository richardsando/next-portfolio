import Page from "./Page";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import Image from "next/image";
import UnstyledLink from "../styled/UnstyledLink";
import Link from "next/link";

const ExternalLink = styled(UnstyledLink)`
  color: black;
  &:hover {
    color: white;
  }
`;

const ProjectWrapper = styled.div`
  background-color: white;
  background-color: rgba(255, 255, 255, 0.9);
  /* border-radius: 1rem; */
  padding: 0.75rem 1.5rem;
  min-height: 480px;
  transition: transform 0.3s, color 0.3s, background-color 0.3s;
  color: #000000;
  &:hover {
    transform: scale(1.02);
    background-color: rgba(255, 121, 83, 0.96);
    color: white;
    cursor: pointer;
  }
`;

const Title = styled.h2`
  color: #000000;
  padding: 0;
  margin: 0;
  transition: color 0.3;
  &:hover {
    color: white;
  }
`;

const Desc = styled.p`
  font-size: 1rem;
  padding: 0;
  margin: 0.5rem 0;
`;
const TechWrapper = styled.p`
  margin: 0.5rem 0;
  display: flex;
`;
const Tech = styled.p`
  font-weight: 600;
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  width: 80px;

  display: flex;
  justify-content: space-between;
`;

const Project = ({ title, desc, url, github, tech, img }) => {
  return (
    <ProjectWrapper>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <Image src={img} alt={title} width={500} height={260} />
      <BottomWrapper>
        <TechWrapper>
          <p> Technologies used: </p> <Tech> {tech}</Tech>
        </TechWrapper>
        <Links>
          <ExternalLink href={github}>
            <AiFillGithub style={{ fontSize: "2rem" }} />
          </ExternalLink>

          <ExternalLink>
            <BsLink45Deg style={{ fontSize: "2rem" }} />
          </ExternalLink>
        </Links>
      </BottomWrapper>
    </ProjectWrapper>
  );
};

export default Project;
import Project from "../components/styled/Project";
import Page from "../components/styled/Page";
import styled from "styled-components";
import { projects } from "../projects";

const ProjectsList = styled(Page)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.6rem;
  margin: 0;
  width: 100%;
  background-color: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0;
`;

const ProjectWrapper = styled.div`
  border-radius: 1rem;
  color: black;
  z-index: 0;
`;

const ProjectsListWrapper = styled(Page)`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  padding: 0;
  max-height: 80vh;
`;

const Title = styled.h1`
  color: white;
  padding: 0;
  margin-bottom: 1rem;
`;

const projectsMap = projects.map((project) => {
  const { title, desc, tech, url, github, img } = project;

  const techList = tech.join(", ");
  return (
    <ProjectWrapper key={title}>
      <Project
        title={title}
        desc={desc}
        tech={techList}
        url={url}
        github={github}
        img={img}
      ></Project>
    </ProjectWrapper>
  );
});

const Projects = () => {
  return (
    <ProjectsListWrapper>
      <Title>Projects</Title>
      <ProjectsList>{projectsMap}</ProjectsList>
    </ProjectsListWrapper>
  );
};

export default Projects;

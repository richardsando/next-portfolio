import styled from "styled-components";
import Page from "../components/styled/Page";
import { GrReactjs } from "react-icons/gr";
import {
  SiJavascript,
  SiNextDotJs,
  SiSass,
  SiHtml5,
  SiNodeDotJs,
  SiPostgresql,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";
import UnstyledLink from "../components/styled/UnstyledLink";

const AboutPage = styled(Page)`
  color: #f0f0f0;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-height: 80vh;
  overflow-y: auto;
`;

const TextA = styled.p`
  font-size: 1.1rem;
  font-weight: 200;
  background-color: rgba(34, 34, 34, 0.3);
  border: solid 2px #ff9577;
  border-radius: 50px;
  padding: 25px;
`;

const TextB = styled(TextA)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.2rem;
  margin-top: 0;
  font-size: 1.1rem;
  font-weight: 200;
`;
const Icons = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconDesc = styled.p`
  margin: 0;
  font-size: 1rem;
  margin-top: 2px;
  font-weight: 200;
`;

const Link = styled(UnstyledLink)`
  font-size: 1.1rem;
  font-weight: 400;
`;

const About = () => {
  return (
    <AboutPage>
      <TextA>
        Originally from Wellington, New Zealand I moved to Melbourne in 2015. I have a background in hospitality and
        have worked as a barista for many number of years, which I have enjoyed thoroughly. Technology and creativity
        has always been passion of mine, as demonstrated by my long term hobbie of visual effects, which you can check
        out
        <Link href="https://vimeo.com/richardsandofx"> here</Link>.
        <br /> <br />
        In 2019 I started a diploma of IT at Coder Academy where I learnt how to create full stack applications using
        the latest technologies. After graduating I completed an internship at a digital agency, helping to develop
        components for a live web app, under the guidance of a senior developer.
        <br /> <br />
        Since graduating I have been focusing on developing my skills, especially in the frontend. My current tech stack
        is React, NextJS and Styled components. (Redux,Typescript and GraphQL are also on my list). As well as learning
        new technologies I aim to improve my fundamentals; HTML, CSS and Javascript. I also am open to learning new
        languages and frameworks - I have just started another internship where Flutter will be used as the main
        technology.
        <br /> <br />I am looking for any opportunities in the field of web development, if you know of something
        someone, please get in touch!
      </TextA>

      <TextB>
        <h2 style={{ margin: "0", fontWeight: "400" }}>Stuff I'm familiar with:</h2>

        <Icons>
          <IconWrapper>
            <GrReactjs style={{ fontSize: "2rem" }}></GrReactjs>
            <IconDesc>React</IconDesc>
          </IconWrapper>
          <IconWrapper>
            <SiJavascript style={{ fontSize: "2rem" }}></SiJavascript>
            <IconDesc>Javascript</IconDesc>
          </IconWrapper>
          <IconWrapper>
            <SiSass style={{ fontSize: "2rem" }}></SiSass>
            <IconDesc>Sass</IconDesc>
          </IconWrapper>
          <IconWrapper>
            <SiNextDotJs style={{ fontSize: "2rem" }}></SiNextDotJs>
            <IconDesc>NextJs</IconDesc>
          </IconWrapper>
          <IconWrapper>
            <SiHtml5 style={{ fontSize: "2rem" }}></SiHtml5>
            <IconDesc>HTML</IconDesc>
          </IconWrapper>
          <IconWrapper>
            <SiNodeDotJs style={{ fontSize: "2rem" }}></SiNodeDotJs>
            <IconDesc>NodeJs</IconDesc>
          </IconWrapper>
          <IconWrapper>
            <SiFigma style={{ fontSize: "2rem" }}></SiFigma>
            <IconDesc>Figma</IconDesc>
          </IconWrapper>
          <IconWrapper>
            <SiAdobephotoshop style={{ fontSize: "2rem" }}></SiAdobephotoshop>
            <IconDesc>Photoshop</IconDesc>
          </IconWrapper>
          <IconWrapper>
            <SiPostgresql style={{ fontSize: "2rem" }}></SiPostgresql>
            <IconDesc>Postgres</IconDesc>
          </IconWrapper>
        </Icons>
      </TextB>
    </AboutPage>
  );
};

export default About;

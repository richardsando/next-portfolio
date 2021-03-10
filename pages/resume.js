import Page from "../components/styled/Page";
import styled from "styled-components";

const ResumeWrapper = styled(Page)`
  /* min-height: 95vh; */
  height: 90vh;
  padding: 0;
  margin: 2rem auto;
  
`;

const Resume = () => {
  return (
    <ResumeWrapper>
      <embed
        src="https://res.cloudinary.com/dhwugz7te/image/upload/v1615358929/portfolio/richardsandoresume_qgtjrr.pdf"
        type="application/pdf"
        width="100%"
        height="80%"
      />
      
    </ResumeWrapper>
  );
};

export default Resume;

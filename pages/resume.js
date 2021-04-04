import Page from "../components/styled/Page";
import styled from "styled-components";

const ResumeWrapper = styled(Page)`
  height: 90vh;
  padding: 0;
  margin: 2rem auto;
`;

const Resume = () => {
  return (
    <ResumeWrapper>
      <embed
        src="/richardsandoresume.pdf#toolbar=0&navpanes=0&scrollbar=0"
        type="application/pdf"
        width="100%"
        height="80%"
      />
    </ResumeWrapper>
  );
};

export default Resume;

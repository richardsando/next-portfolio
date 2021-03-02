import styled from "styled-components";

const UnstyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 1.38rem;
  transition: color 0.15s;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    color: #ff9577;
  }
`;

export default UnstyledLink;

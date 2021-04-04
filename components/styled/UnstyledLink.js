import styled from 'styled-components';

const UnstyledLink = styled.a`
	text-decoration: none;
	color: inherit;
  font-size: 1.5rem;
  font-weight: 200;
	transition: color 0.15s;
	&:hover {
		cursor: pointer;
		color: #ff9577;
	}
`;

export default UnstyledLink;

import styled from 'styled-components';
import Page from '../components/styled/Page';
import { GrReactjs } from 'react-icons/gr';

const AboutPage = styled(Page)`
	/* background-color: rgba(34, 34, 34, 0.2); */
	color: #f0f0f0;
	height: 80vh;
`;

const TextA = styled.p`
	font-size: 1.5rem;
	background-color: rgba(34, 34, 34, 0.3);
	border: solid 2px #ff9577;
	border-radius: 50px;
	padding: 25px;
`;

const TextB = styled(TextA)`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 1rem;
`;
const Icons = styled.div`
	display: flex;
	margin-top: 1rem;
`;

const About = () => {
	return (
		<AboutPage>
			<TextA>
				I am interested in creating beautiful experiences for users in the form of well designed websites.With a
				background in graphic design and visual fx, I recently completed a boot camp course to level up my
				technical skills. I am looking for opportunities in front end web development, where I can develop my
				skills.
			</TextA>
			<TextA>
				Currently I am working on personal projects in the vibrant React ecosystem in order to boost my
				portfolio of work and learn as much I can.
			</TextA>
			<TextB>
				<h3 style={{ margin: '0' }}>Current tech stack:</h3>

				<Icons>
					<GrReactjs style={{fontSize: "2rem"}}></GrReactjs>
				</Icons>
			</TextB>
		</AboutPage>
	);
};

export default About;

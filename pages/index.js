import styled from 'styled-components';
import Page from '../components/styled/Page';
import Image from 'next/image';

const About = styled(Page)`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	background-color: rgba(10, 0, 36, 0.3);
`;

const HRule = styled.hr`
	width: 768px;
`;

const HeaderWrapper = styled.div`
	padding: 1rem;
	align-items: center;
	justify-content: center;
	display: flex;
`;

const ProfileImage = styled(Image)`
	border-radius: 50%;
`;

const Header = styled.h1`
	font-weight: 900;
	font-size: 6rem;
	margin: auto 0;
	color: #f3f3f3;
`;

const SecondaryHeader = styled.h2`
	font-weight: 100;
	font-size: 3rem;
	margin: auto 0;
	color: #f3f3f3;
`;

const Blurb = styled.p`
	font-weight: 400;
	font-size: 1.2rem;
	color: #f3f3f3;
`;

const HomePage = () => {
	return (
		<About>
			<HeaderWrapper>
				<Header> Richard Sando </Header> <SecondaryHeader> Full Stack Web Developer </SecondaryHeader>{' '}
			</HeaderWrapper>{' '}
			<HRule />
			<ProfileImage src="v1615356356/portfolio/profile_pic_j1msjf.jpg" width={200} height={200}></ProfileImage>{' '}
			<Blurb>
				I am interested in creating beautiful experiences for users in the form of well designed websites.With a
				background in graphic design and visual fx, I recently completed a boot camp course to level up my
				technical skills.I am looking for opportunities in front end web development, where I can develop my
				skills.Currently I am working on personal projects in the vibrant React ecosystem, in order to boost my
				portfolio of work and learn as much I can.{' '}
			</Blurb>
		</About>
	);
};

export default HomePage;

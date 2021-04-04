import styled from 'styled-components';
import Page from '../components/styled/Page';
import Image from 'next/image';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Index = styled(Page)`
	background-color: rgba(10, 0, 36, 0.3);
	display: flex;
	min-height: 80vh;
	justify-content: center;
	align-items: center;
	background: none;
`;

const ProfileImage = styled(Image)`
	border-radius: 50%;
`;

const ProfileImageWrapper = styled.div`
	min-width: 200px;
	min-height: 100%;
	width: 250px;
	padding: 0;
	margin: 0;
`;

const Blurb = styled.div`
	color: white;
	font-size: 1.75rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  max-width: 500px;
  font-weight: 200;
`;

const AboutWrapper = styled.div`
	box-shadow: inset 0px 0px 0px 4px #ff9577;
	display: flex;
	background-color: rgba(10, 0, 36, 0.3);
	box-sizing: border-box;
	border-radius: 200px;
	height: 200px;
	padding: 0;
  width: 800px;
  line-height: 1.2;
`;

const Icon = styled(HiOutlineLocationMarker)`
	color: white;
`;

const Location = styled.span`
	display: flex;
	color: white;
	padding-top: 5px;
  margin-top:10px;
	justify-content: flex-end;
	width: 88%;
`;

const HomePage = () => {
	return (
		<Index>
			<AboutWrapper>
				<ProfileImageWrapper>
					<ProfileImage
						src="v1615356356/portfolio/profile_pic_j1msjf.jpg"
						width={200}
						height={200}
						alt="Richard Sando Profile Picture"
					></ProfileImage>{' '}
				</ProfileImageWrapper>
				<Blurb>
					<p>
						{' '}
						Hi, I'm <span style={{ color: '#ff9577' }}>Richard Sando</span> -<br />a fullstack web developer
						focused on design and user experience. <br />
						<Location>
							{' '}
							<Icon></Icon> Melbourne, Australia
						</Location>{' '}
					</p>
				</Blurb>
			</AboutWrapper>
		</Index>
	);
};

export default HomePage;

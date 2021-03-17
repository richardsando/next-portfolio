import styled from 'styled-components';
import Page from '../components/styled/Page';
import Image from 'next/image';
import { MdLocationOn } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
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
	width: 30vw;
	padding: 0;
	margin: 0;
`;

const Blurb = styled.div`
	color: white;
	font-size: calc(12px + 1.5vw);
	font-weight: 600;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const AboutWrapper = styled.div`
	box-shadow: inset 0px 0px 0px 4px #ff9577;
	display: flex;
	background-color: rgba(10, 0, 36, 0.3);
	box-sizing: border-box;
	/* border: solid 6px #ff9577; */
	border-radius: 200px;
	height: 200px;
	padding: 0;
`;

const Icon = styled(HiOutlineLocationMarker)`
	color: white;
`;

const Location = styled.span`
	display: flex;
	color: white;
	font-size: calc(6px + 1vw);
	padding: 5px;
  /* margin-top: 10px; */
	justify-content: flex-end;
  width: 88%;
  /* margin: 2.5px; */
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
					></ProfileImage>{' '}
				</ProfileImageWrapper>
				<Blurb>
					<p>
						{' '}
						Hi, I'm <span style={{ color: '#ff9577' }}>Richard Sando</span> <br />a fullstack web developer
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

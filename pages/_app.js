import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const Container = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200&display=swap');
	font-family: 'Mulish', sans-serif;
	color: #eeeeee;
	font-weight: 300;
	background: rgb(32, 22, 149);
	background: linear-gradient(130deg, rgba(15, 10, 78, 1) 0%, rgba(255, 147, 98, 1) 100%);
	position: relative;
	min-height: 100vh;
	opacity: 1;
	position: relative;
`;

const BackgroundImage = styled.div`
	background-image: url('https://res.cloudinary.com/dhwugz7te/image/upload/v1615356360/portfolio/background_rpee1z.png');
	min-height: 100vh;
	opacity: 1;
	position: relative;
`;

const MyApp = ({ Component, pageProps }) => {
	return (
		<Container>
			<Normalize />
			<BackgroundImage>
				<Navbar></Navbar>
				<Component {...pageProps} />
				<Footer></Footer>
			</BackgroundImage>
		</Container>
	);
};

export default MyApp;

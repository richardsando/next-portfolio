import styled from "styled-components";
import Link from "next/link";
import { Normalize } from "styled-normalize";
import Navbar from "../components/NavBar";
import Image from "next/image";
import Footer from "../components/Footer";
import "./_app.css";

const Container = styled.div`
  /* @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;900&display=swap"); */
  /* font-family: "Roboto", sans-serif; */

  background: rgb(32, 22, 149);
  background: linear-gradient(
    130deg,
    rgba(15, 10, 78, 1) 0%,
    rgba(255, 147, 98, 1) 100%
  );
  position: relative;
  min-height: 100vh;
  opacity: 1;
  position: relative;
`;

const BackgroundImage = styled.div`
  background-image: url("/images/background.png");
  min-height: 100vh;
  opacity: 1;
  position: relative;
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <Container>
    <BackgroundImage>
      <Normalize />
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
      </BackgroundImage>
    </Container>
  );
};

export default MyApp;

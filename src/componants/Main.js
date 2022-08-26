import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Logocomponents from "../subcomponents/Logocomponents";
import Powerbutton from "../subcomponents/Powerbutton";
import SocialIcon from "../subcomponents/SocialIcon";
import { NavLink } from "react-router-dom";
import { YinYang } from "./Allsvgs";
import Intro from "./Intro";
import {motion} from 'framer-motion'

const maincontainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vh;
  height: 100vh;

  overflow: hidden;
  position: relative h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
`;

const Rotate = keyframes`
from {
  transform: rotate(0)
}
to { transform: rotate(360deg)

}
`;
const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 3;
`;
const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 3;
`;
const Work = styled(NavLink)`
  color: ${(props) => props.click? props.theme.body : props.theme.text};
  position: absolute;
  top: 50%;
  left: calc(1.4rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 3;
`;
const About = styled(NavLink)`
  color: ${(props) => props.click? props.theme.body : props.theme.text};
  text-decoration: none;
  z-index: 3;
`;

const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 3;
`;
const Bottumbar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  widht: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const Center = styled.div`
  position: absolute;
  top: ${(props) => (props.click ? "82%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 1s ease;
  cursor: pointer;
  & > :first-child {
    animation: ${Rotate} infinite 1.5s linear;
  }
  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding: 1rem;
  }
`;
const Darkdiv = styled.div`
  position: absolute;
  background-color: #000;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? '50%' : '0')};
  height:${(props) => (props.click ? '100%' : '0')};
  z-index: 3;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Main = () => {
  const [click, setclick] = useState();
  const handleClick = () => setclick(!click);
  return (
    <maincontainer>
      <Darkdiv click={click}/>
      <Container>
        <Powerbutton />
        <Logocomponents theme = {click ? 'dark' : 'Light'} />
        <SocialIcon theme = {click ? 'dark' : 'Light'} />
        <Center click={click}>
          <YinYang
            onClick={handleClick}
            widget={click ? "120" : "200"}
            height={click ? "120" : "200"}
            fill="currentColor"
          />
          <span> Click here</span>
        </Center>

        <Contact
          target="_blank"
          to={{ pathname: "mailto:amankapil60@gmail.com" }}
        >
          <motion.h2
          whileHover = {{scale : 1.1 }}
          whileTap = {{scale : 0.9}}
          
          
          >Say Hi.....</motion.h2>
        </Contact>
        <Blog to="/blog">
          <motion.h2
          whileHover = {{scale : 1.1 }}
          whileTap = {{scale : 0.9}}> Blogs</motion.h2>
        </Blog>
        <Work to="/work" click={click}>
          <motion.h2
          whileHover = {{scale : 1.1 }}
          whileTap = {{scale : 0.9}}> work</motion.h2>
        </Work>
        <Bottumbar>
          <About to="/about" click={click}>
            <motion.h2
          whileHover = {{scale : 1.1 }}
          whileTap = {{scale : 0.9}}> About</motion.h2>
          </About>
          <Skills to="/skills">
            <motion.h2
          whileHover = {{scale : 1.1 }}
          whileTap = {{scale : 0.9}}> Skills</motion.h2>
          </Skills>
        </Bottumbar>
      </Container>
      {click ? <Intro click={click}/> : null}
    </maincontainer>
  );
};

export default Main;

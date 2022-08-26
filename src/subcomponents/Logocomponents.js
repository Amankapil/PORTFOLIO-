import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../componants/Theme";

const Logo = styled.h1`
  display: inline-block;
  font-family: pacifico, cursive;
  color: ${(props) => (props.color === 'dark' ? DarkTheme.text : DarkTheme.body)};
  font-family: "pacifico", cursive;
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 3;
`;

const Logocomponents = (props) => {
  return <Logo color={props.theme}>CB</Logo>;
};

export default Logocomponents;

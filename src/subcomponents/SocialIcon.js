import React from 'react'
import styled from "styled-components";

import { NavLink } from 'react-router-dom'
import { Facebook, Github, Twitter, YouTube } from '../componants/Allsvgs'
import {DarkTheme} from '../componants/Theme'


const Icon = styled.div`
display:flex;
flex-direction:column;
align-items:center;


position:fixed;
bottom:0;

left: 2rem;
z-index:3;
&>*:not(:last-child){
    margin: 0.5rem;

}

`
const Line = styled.span`
height:8rem;
width:2px;
background-color: ${props=>props.color  === 'dark' ? DarkTheme.text : DarkTheme.body}
`
const SocialIcon = (props) => {
  return (
    <Icon>
        <div> 
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://github.com/Amankapil"}}>
                <Github widget= {25} height={25} fill ={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
            </NavLink>
        </div>
        <div>
            <NavLink style={{color: 'inherit'}}target="_blank" to={{pathname:"https://www.linkedin.com/in/aman-kapil-750640200"}}>
                <Twitter widget= {25} height={25} fill ={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
            </NavLink>
        </div>
        <div>
            <NavLink style={{color: 'inherit'}}target="_blank" to={{pathname:"https://www.facebook.com/aman.kapil.756"}}>
                <Facebook widget= {25} height={25} fill ={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
            </NavLink>
        </div>
        <div>
            <NavLink style={{color: 'inherit'}}target="_blank" to={{pathname:"https://github.com/Amankapil"}}>
                <YouTube widget= {25} height={25} fill ={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
            </NavLink>
        </div>
        <Line color = {props.theme} />
    </Icon>
  )
}

export default SocialIcon
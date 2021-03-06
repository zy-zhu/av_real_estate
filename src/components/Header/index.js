import React, { Component } from "react";

import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const FadeInAnimation = keyframes`${fadeIn}`;

const HeaderContainer = styled.div`
    height: 8vh;
    width:100vw;
    background-color:#ffd861;
    z-index:1000;
    position: fixed;
`
const Name = styled.div`
    text-align:right;
    margin-right:20px;
    color:white;
    font-family:futura;
    padding-top:10px;
`

const Logo = styled.div`
    text-align:left;
    margin-left:20px;
    padding-top:-5px;
    position:fixed
`

class Header extends Component {


    render() {
        return (
            <HeaderContainer>

                <Logo><a href="http://mit.edu/" target="_blank">
                            <img src="img/mit.png" width="50" height="80" className="logo_head"
                                alt="" loading="lazy" />
                        </a> </Logo>

                <Name>Autonomous Vehicles | Real Estate </Name>
                
                {/* <div>
                    <ul className="uk-navbar-left">

                        <li><a href="http://chinaroom.polito.it/" target="_blank">
                            <img src="img/cre_logo_w.png" width="200" height="100" className="logo_head"
                                alt="" loading="lazy" />
                        </a> </li>

                        <li><a href="http://chinaroom.polito.it/" target="_blank">
                            <img src="img/sul_logo.svg" width="150" height="80" className="logo_head"
                                alt="" loading="lazy" />
                        </a> </li>
                        <li><a href="http://chinaroom.polito.it/" target="_blank">
                            <img src="img/cre_logo_w.png" width="200" height="100" className="logo_head"
                                alt="" loading="lazy" />
                        </a> </li>
                        <li><a href="http://chinaroom.polito.it/" target="_blank">
                            <img src="img/cre_logo_w.png" width="200" height="100" className="logo_head"
                                alt="" loading="lazy" />
                        </a> </li>

                        {/* 
                        <li><a className="" href="http://web.mit.edu/" target="_blank">
                            <img src="img/sap_logo.png" width="60" height="30" padding="200"
                                alt="" loading="lazy" />
                        </a></li> */}
                {/* </ul> */}
                {/* </div > * /} */}
            </HeaderContainer >





        );
    }
}

export default Header;

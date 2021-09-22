import React, { Component } from "react";

import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';


const FadeInAnimation = keyframes`${fadeIn}`;

const MainTitle = styled.div`
    text-align:left;
    font-family: Futura;
    font-size: 50px;
    color:#000000;
    position:fixed;
    z-index:99;
    margin-top:10vh;
    left:2vw;
    top:0vh;
    animation: 1s ${FadeInAnimation};
`
const SubTitle = styled.div`
text-alighn:left;
font-family:Futura;
font-size:15px;
position:fixed;
z-index:99;
left:2vw;
top:5vh;
animation: 1s ${FadeInAnimation};
`

const HomeContainer = styled.div`
width:100vw;
height:100vh;
position:fixed;
animation: 1s ${FadeInAnimation};
`

class Home extends Component {


  render() {
    return (
      <div className="wrapper">

        <MainTitle>Autonomous Vehicles & Real Estate</MainTitle>
        {/* <SubTitle>Reshape the future of real estate</SubTitle> */}
        <HomeContainer>
          <img className='HomeImg' src='img/landing.svg'></img>


          {/* <img className='HomeImg' src='https://news.europawire.eu/wp-content/uploads/2018/08/Two-partner-projects-@CITY-and-@CITY-AF-aim-to-develop-concepts-technologies-and-prototype-applications-to-enable-automated-driving-in-complex-urban-areas.jpg'></img> */}

        </HomeContainer >
      </div>


    );
  }
}

export default Home;

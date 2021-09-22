import React, { Component } from "react";
import Footer from "../../components/Footer";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const FadeInAnimation = keyframes`${fadeIn}`;

const AboutContainer = styled.div`
animation: 1s ${FadeInAnimation};
`


class About extends Component {
  render() {
    return (

      <AboutContainer>
        <div className="About" id='overlay'>
          <h1>About</h1>
          <Footer />
        </div>
      </AboutContainer>
    );
  }
}

export default About;

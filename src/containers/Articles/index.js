import React from "react";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";
import styled, { keyframes } from 'styled-components';
import Nav from "../../components/Nav";
import { fadeIn } from 'react-animations';
import Header from "../../components/Header";
import About from "../About";


const FadeInAnimation = keyframes`${fadeIn}`;

const MainTitle = styled.div`
    text-align:left;
    font-family: Futura;
    font-size: 50px;
    color:#000000;
    animation: 1s ${FadeInAnimation};
`

const SubTitle = styled.div`
text-alighn:left;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight:300;
font-size:15px;
animation: 1s ${FadeInAnimation};

`

const Home = () => {


    return (
        <div>
                <Header></Header>
            <div className='Case_Study'>

                <div className="uk-section">
                    <div className="uk-container uk-container-large">

                        <MainTitle>Autonomous Vehicles & Real Estate</MainTitle>
                        <SubTitle>Driving the future of real estate via innovation in transportation</SubTitle>

                        <Nav />



                        <Query query={ARTICLES_QUERY}>
                            {({ data: { articles } }) => {
                                return <Articles articles={articles} />;
                            }}
                        </Query>






                    </div>
                </div>



            </div>
            <About></About>
        </div>
    );
};

export default Home;
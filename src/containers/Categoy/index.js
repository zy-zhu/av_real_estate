import React from "react";
import { useParams } from "react-router";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";
import Nav from "../../components/Nav";
import ReactMarkdown from "react-markdown";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const FadeInAnimation = keyframes`${fadeIn}`;

const IntroBox = styled.div`
// overflow-y: scroll;
max-height:70vw;
min-height:10px;
margin-top:30px;
margin-bottom:50px;
padding-right:20px;
animation: 1s ${FadeInAnimation};
`

const CategoryContainer = styled.div`
animation: 1s ${FadeInAnimation};
`


const Category = () => {
    let { id } = useParams();
    const scrollContainerStyle = { width: "70vw", maxHeight: "500px" };


    return (

        <CategoryContainer>
            <div className='Case_Study'>

                <Query query={CATEGORY_ARTICLES_QUERY} slug={id}>

                    {({ data: { categories } }) => {

                        if (categories.length) {
                            return (
                                <div>
                                    <div className="uk-section">

                                        <div className="uk-container uk-container-large">

                                            <h1>{categories[0].name}</h1>
                                            <Nav />




                                            <div className='scrollbar scrollbar-warning'

                                                style={scrollContainerStyle} >
                                                <IntroBox>
                                                    <p>Intoduction</p>

                                                    <ReactMarkdown>{categories[0].introduction}</ReactMarkdown>
                                                </IntroBox>
                                            </div>





                                            <Articles articles={categories[0].articles} />

                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    }}
                </Query>

            </div>
        </CategoryContainer>
    );
};

export default Category;
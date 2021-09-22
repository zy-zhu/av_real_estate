import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

import { useParams } from "react-router";



// const CardImage = styled.div`
// max-width:50%;
// height: auto;
// `
const FadeInAnimation = keyframes`${fadeIn}`;

const CardContainer = styled.div`
animation: 1s ${FadeInAnimation};
`

const Card = ({ article }) => {


    const imageUrl =
        process.env.NODE_ENV !== "development"
            ? article.image.url
            : process.env.REACT_APP_BACKEND_URL + article.image.url;


    return (
        <CardContainer>

            <Link to={`/article/${article.slug}`} className="uk-link-reset">
                <a to={`/article/${article.slug}`}
                    className='card yellow'>
                    <img
                        className='CardImage'
                        src={imageUrl}
                        alt={article.image.url}
                    />
                    <p className='CardTitle'>{article.title}</p>
                    {/* <p className='CardLocation'>location</p> */}
                    <div className='overlay'>
                    </div>

                </a>

                {/* <div className="uk-card uk-card-muted uk-card-hover">
                <div className="uk-card-media-center">
                    <img
                        src={imageUrl}
                        alt={article.image.url}
                        height="50"
                    />
                </div>
                <div className="uk-card-body">
                    <p id="category" className="uk-text-uppercase">
                        {article.category.name}
                    </p>
                    <p id="title" className="uk-text-large">
                        {article.title}
                    </p>
                </div>
            </div> */}


            </Link>

        </CardContainer>
    );
};

export default Card;
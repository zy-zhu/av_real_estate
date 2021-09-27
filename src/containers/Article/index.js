import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import DiagramBox from "../../components/DiagramBox";
import Sidebar from "../../components/Sidebar";

import ARTICLE_QUERY from "../../queries/article/article";

import Divider from '@material-ui/core/Divider';




const Margin = styled.div`
margin-left:60px;
margin-top:20px;
margin-bottom:60px;
margin-right:0px;
padding-top:40px;
`

const Margin_sidebar = styled.div`
padding-top:120px;
margin-right:0px

`

const Article_container = styled.div`
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
// border-radius: 10px;
`

const Description = styled.div`
font-size:16px;
font-family:Futura;
padding-top:30px
`


const Article = () => {
    let { id } = useParams();
    const history = useHistory();
    return (
        <Query query={ARTICLE_QUERY} slug={id}>
            {({ data: { articles } }) => {
                if (articles.length) {
                    const imageUrl =
                        process.env.NODE_ENV !== "development"
                            ? articles[0].image.url
                            : process.env.REACT_APP_BACKEND_URL + articles[0].image.url;

                    return (

                        <div className='Card'>
                            <div id='overlay'>


                                <Article_container>
                                    <div className='btn_close' onClick={() => {
                                        history.goBack();
                                    }}>

                                    </div>

                                    <Grid container spacing={3}>
                                        <Grid item sm={8}>
                                            <Margin>
                                                <h5><a onClick={() => history.push("", { from: "HomePage" })}>{articles[0].category.name}</a> > {articles[0].category.name}
                                                </h5>

                                                <h2>{articles[0].title}</h2>
                                                <div
                                                    id="banner"
                                                    className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                                                    data-src={imageUrl}
                                                    data-srcset={imageUrl}
                                                    data-uk-img
                                                >
                                                </div>

                                                <div>
                                                    <div className="uk-container-small">

                                                        <Description>{articles[0].description}</Description>

                                                        <ReactMarkdown>{articles[0].content}</ReactMarkdown>

                                                    </div>
                                                </div>

                                                <DiagramBox />
                                            </Margin>


                                        </Grid>
                                        {/* <Divider orientation="vertical" flexItem={true} variant='inset' /> */}
                                        <Grid item sm={3}>
                                            <Margin_sidebar>
                                                <Sidebar />
                                            </Margin_sidebar>

                                        </Grid>





                                    </Grid>

                                </Article_container>
                            </div>

                        </div >


                    );
                }
            }}
        </Query >
    );
};

export default Article;
import React from "react";
import Card from "../Card";

import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ARTICLE_QUERY from "../../queries/article/article";




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(15),
        textAlign: 'right',
        color: theme.palette.text.secondary,
    },
}));


const Articles = ({ articles }) => {

    const classes = useStyles();


    return (
        <div>

            {/* Test Under */}
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {articles.map((article, i) => {
                        return <Grid item xs={12} sm={4}>
                            <Card article={article} key={`article__${article.slug}`} />
                        </Grid>
                    })}

                </Grid>


            </div>







            {/* <div className="uk-child-width-1-3@m" data-uk-grid>
                <div>
                    {leftArticles.map((article, i) => {
                        return <Card article={article} key={`article__${article.slug}`} />;
                    })}
                </div>

                <div>
                    <div className="uk-child-width-1-3@m" data-uk-grid>
                        {rightArticles.map((article, i) => {
                            return <Card article={article} key={`article__${article.slug}`} />;
                        })}
                    </div>
                </div>
            </div> */}










        </div >
    );
};


export default Articles;
import React from "react";
import { makeStyles } from '@material-ui/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

import { useParams } from "react-router";
import Query from "../../components/Query";
import ARTICLE_QUERY from "../../queries/article/article";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    margin: '30px',
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },

  SingleImage: {
    objectFit: 'cover',
    width: '350px',
    height: '400px',

  }
}));

const DiagramBox = () => {
  const classes = useStyles();
  let { id } = useParams();

  return (
    <Query query={ARTICLE_QUERY} slug={id}>
      {({ data: { articles } }) => {
        if (articles.length) {
          const imageUrl =
            process.env.NODE_ENV !== "development"
              ? articles[0].image.url
              : process.env.REACT_APP_BACKEND_URL + articles[0].image.url;


          return (

            <div className={classes.root}>
              <ImageList className={classes.imageList} cols={1.5}>


                {articles.map((image) => (
                  <ImageListItem key={articles[0].image} >
                    <img src={imageUrl} alt={articles[0].image.url} className={classes.SingleImage} />
                  </ImageListItem>


                ))}

              </ImageList>

            </div>
          );
        }
      }}
    </Query>
  );
};

export default DiagramBox;
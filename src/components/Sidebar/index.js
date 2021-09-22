import React from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';


import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


import { useParams } from "react-router";
import Query from "../../components/Query";
import ARTICLE_QUERY from "../../queries/article/article";

const Sidebar = () => {
    let { id } = useParams();
    return (
        <Query query={ARTICLE_QUERY} slug={id}>
            {({ data: { articles } }) => {

                if (articles.length) {
                    const diagramUrl =
                        process.env.NODE_ENV !== "production"
                            ? articles[0].diagrams.url
                            : process.env.REACT_APP_BACKEND_URL + articles[0].diagrams.url;

                    const company_logoUrl =
                        process.env.NODE_ENV !== "development"
                            ? articles[0].company_logo.url
                            : process.env.REACT_APP_BACKEND_URL + articles[0].company_logo.url;

                    const impactUrl =
                        process.env.NODE_ENV !== "development"
                            ? articles[0].impact_area.url
                            : process.env.REACT_APP_BACKEND_URL + articles[0].impact_area.url;

                    const scaleUrl =
                        process.env.NODE_ENV !== "development"
                            ? articles[0].scale.url
                            : process.env.REACT_APP_BACKEND_URL + articles[0].scale.url;




                    return (

                        <List>

                            {/* Company */}
                            <ListItem alignItems="flex-start">

                                <ListItemText
                                    primary="Company"
                                    secondary={<React.Fragment>

                                        <a href="https://www.gov.sg/" target='_blank'>
                                            <img src={company_logoUrl} alt={articles[0].company_logo.url}>
                                            </img> </a>

                                    </React.Fragment>
                                    }


                                />
                            </ListItem>

                            <Divider variant="middle" component="li" />

                            {/* Location */}

                            <ListItem alignItems="flex-start">

                                <ListItemText
                                    primary="Location"
                                    secondary={
                                        <React.Fragment>
                                            {articles[0].location}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant='middle' component="li" />

                            {/* Impact Area */}

                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary="Impact Area"
                                    secondary={
                                        <React.Fragment>
                                            <img src={impactUrl} alt={articles[0].impact_area.url}>
                                            </img>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>

                            {/* Year */}
                            <Divider variant='middle' component="li" />
                            <ListItem alignItems="flex-start">

                                <ListItemText
                                    primary={

                                        <React.Fragment>
                                            {'Year'}
                                            <Tooltip title='proposed year/implementation year' placement='right-start'>
                                                <IconButton size={'small'} edge={'end'} color={'inherit'} aria-label="more information">
                                                    <InfoIcon style={{ fontSize: 15 }} />
                                                </IconButton>
                                            </Tooltip>

                                        </React.Fragment>

                                    }
                                    secondary={
                                        <React.Fragment>
                                            <div className='big_year'>{articles[0].year_propose}</div>
                                            <br />
                                            {articles[0].year_implementation}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>

                            <Divider variant='middle' component="li" />

                            {/* Stakeholder */}
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary="Stakeholder"
                                    secondary={
                                        <React.Fragment>
                                            {articles[0].stakeholder}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>

                            {/*Scale*/}
                            <Divider variant='middle' component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary="Scale"
                                    secondary={
                                        <React.Fragment>
                                            <img src={scaleUrl} alt={articles[0].scale.url} width='80'>
                                            </img>

                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant='middle' component="li" />

                            {/* Autonomous Type */}
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary="Autonomous Type"
                                    secondary={
                                        <React.Fragment>
                                            {' ---'}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant='middle' component="li" />

                            {/* External Link */}
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary="External Link"
                                    secondary={
                                        <React.Fragment>
                                            {articles[0].external_link}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>


                            <Divider variant='middle' component="li" />





                        </List>

                    );
                }
            }}
        </Query>

    );
};

export default Sidebar;


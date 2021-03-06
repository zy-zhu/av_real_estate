import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const FooterContainer = styled.div`
background-color: #ffd861;
min-height:100px;
position:relative;
padding-right:20vw;
padding-left:20vw;
padding-top:10vh;
padding-bottom:10vh;
margin:0;
`

const Space = styled.div`
height:20px;
`

const Footer = () => {
    return (
        <FooterContainer>

            <h4>About this project</h4>
            <p>
                Transportation has shaped cities as we know them. The emergence of autonomous vehicles are among the most powerful innovations that will change transportation in the coming years, influencing where and how people live, shop, socialize and work, and thus inducing changes in land use and real estate market.
                Planning agencies and the real estate industry can be proactive, leveraging both market forces and public policy to help prepare cities to accommodate and foster mobility innovation, while exploring and supporting new market opportunities.
                As the technology is still evolving, in this project we build case studies for the future, showing how innovations in mobility will transform real estate products in different countries, transportation modalities, and real estate sectors. From the residential and commercial market to warehouses, parking garages, and even curbside management, autonomous mobility might have profound impacts on cities and the real estate industry.
                The project is a collaboration between the Center for Real Estate, the Senseable City Lab, and the Mobility Initiative, supported by the J-WEL (Abdul Latif Jameel World Education Lab).</p>


            <br />

            <Space />

            <Grid container spacing={2}>

                <Grid item item xs={12} sm={6}>
                    <h4>Team</h4>
                    <ul className='no-bullets'>
                        <li>Fábio Duarte<h6>Principal Research Scientist, Senseable City Lab(PI)</h6>
                        </li>
                        <li>Siqi Zheng<h6>Director, Center of Real Estate</h6>
                        </li>
                        <li>Jinhua Zhao<h6>Director, MIT Mobility Initiative</h6>
                        </li>
                        <li>Maria Camila Ramos<h6>Researcher</h6>
                        </li>
                        <li>Annie Hudson<h6>Researcher</h6>
                        </li>
                        <li>
                            Ziyuan Zhu
                            <h6>Visualization, Development</h6>
                        </li>
                        <li>
                            Meghan Timmos
                            <h6>Visualization, Design</h6>
                        </li>
                        <li>
                            Tiasa Kim
                            <h6>Research Assistant</h6>
                        </li>
                        <li>
                            Katie Shaw
                            <h6>Research Assistant</h6>
                        </li>
                    </ul>
                </Grid>
                <Grid item item xs={12} sm={6}>
                    <h4>Press Release</h4>
                    <p><a href="https://mitcre.mit.edu/" target="_blank">Download Press Material</a><br />
                    The material on this web site can be used freely in any publication provided that
                    <br />

                    1. It is duly credited as a project by the (class Name)<br />
                    2. A PDF copy of the publication is sent to fabiod@mit.edu</p>

                    <br/>

                    <h4>Project Collaborators</h4>

                    <ul>

                        <li><a href="https://mitcre.mit.edu/" target="_blank">
                            <img src="img/cre_logo_nomit.png" width="180" height="100" className="logo_head"
                                alt="" loading="lazy" />
                        </a> </li>

                        <li><a href="https://www.sul.mit.edu/" target="_blank">
                            <img src="img/sul_logo_nomit.svg" width="130" height="80" className="logo_head"
                                alt="" loading="lazy" />
                        </a> </li>
                        <li><a href="http://senseable.mit.edu/" target="_blank">
                            <img src="img/scl_nomit.svg" width="80" height="80" className="logo_head"
                                alt="" loading="lazy" />
                        </a> </li>
                        <li><a href="https://sap.mit.edu/" target="_blank">
                            <img src="img/sap_logo_w.png" width="130" height="100" className="logo_head"
                                alt="" loading="lazy" />
                        </a> </li>
                        <li><a href="https://jwel.mit.edu/" target="_blank">
                            <img src="img/jwel_nomit.png" width="150" height="100" className="logo_head"
                                alt="" loading="lazy" />
                        </a> </li>

                        {/* 
                        <li><a className="" href="http://web.mit.edu/" target="_blank">
                            <img src="img/sap_logo.png" width="60" height="30" padding="200"
                                alt="" loading="lazy" />
                        </a></li> */}
                    </ul>

                </Grid>

            </Grid>






        </FooterContainer>
    );
};

export default Footer;
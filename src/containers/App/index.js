import React, { Component } from "react";
// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom'


import { Switch, Route, Link, withRouter } from "react-router-dom";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Categoy";
import About from "../About";
import Home from "../Home";
import Modal from "../Modal";
import Header from "../../components/Header";

import Icon from '@material-ui/core/Icon';
import { IconButton } from '@material-ui/core';


import Button from '@material-ui/core/Button';

const useStyles = theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },

});


class App extends Component {

  constructor(props) {
    super(props);
    this.previousLocation = this.props.location;
  }

  componentWillUpdate() {
    let { location } = this.props;

    if (!(location.state && location.state.modal)) {
      this.previousLocation = location;
    }
  }

  render() {
    const { classes } = this.props;
    const { location } = this.props;
    const isModal = (
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    return (


      <div className='App-container'>

        <Header></Header>

        {/* <div className="menu">
    
          <Button size="small" > <Link className="link btn_menu" to='/about'>About</Link></Button>
          <Button size="small">
            <Link className="link btn_menu" to='/'>Case Studies</Link></Button>
          <Button size="small">
            <Link className="link btn_menu" to='/contact'>Home</Link></Button>
        </div> */}
        
        {/* 
          <Link
            className="frontpage-job"
            to={{
              pathname: "/modal/1",
              state: { modal: true }
            }}
          >
            Modal1
          </Link> */}



        <div className="App">
          <Router>

          <Switch >
            <Route path="/" component={Articles} exact />
            <Route path="/article/:id" component={Article} exact />
            <Route path="/category/:id" component={Category} exact />
          </Switch>

          </Router>

{/* <About></About> */}
{/* 
          <Switch location={isModal ? this.previousLocation : location}>

            <Route exact path="/contact/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/modal/:id"><Modal isModal={isModal} /></Route>
          </Switch>
          {isModal
            ? <Route exact path="/modal/:id"><Modal isModal={isModal} /></Route>
            : null
          } */}


        </div>
      </div>

    );
  }
}

export default withRouter(App);
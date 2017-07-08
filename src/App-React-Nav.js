/*
AM2017.05.29 - Main Component that will run the majority of the code.  Note that
we craeted a new Class called "App" and extended the Component class.  Components 
in ReactJS are used as the building blocks for app development.
*/

import React, { Component } from 'react';
import {
  withRouter,
  Link
} from 'react-router-dom';

//import Example from './containers/SideBar.js';
import { nameOfAnimation as Menu } from 'react-burger-menu'

import {
  Nav,
  NavItem,
  Navbar
} from 'react-bootstrap';

import './App.css';
import Routes from './Routes';
import RouteNavItem from './components/RouteNavItem';

import { CognitoUserPool, } from 'amazon-cognito-identity-js';
import config from './config.js';
import AWS from 'aws-sdk'; //used to cache AWS Credentials

class App extends Component {
  
  //Adding code to set the state to null and then use the 
  //token retreived from AWS Cognito to update the state
  //to let the app know the user is logged in.
constructor(props) {
  super(props);

  this.state = {
    userToken: null,
  };

}

updateUserToken = (userToken) => {
  this.setState({
    userToken: userToken
  });
}


async componentDidMount() {
  const currentUser = this.getCurrentUser();

    
  if (currentUser === null) {
    this.setState({isLoadingUserToken: false});
    
    return;
  }

  try {
    const userToken = await this.getUserToken(currentUser);
    this.updateUserToken(userToken);
  }
  catch(e) {
    alert(e);
  }

  this.setState({isLoadingUserToken: false});
}

getCurrentUser() {
  const userPool = new CognitoUserPool({
    UserPoolId: config.cognito.USER_POOL_ID,
    ClientId: config.cognito.APP_CLIENT_ID
  });
  return userPool.getCurrentUser();
}

getUserToken(currentUser) {
  return new Promise((resolve, reject) => {
    currentUser.getSession(function(err, session) {
      if (err) {
          reject(err);
          return;
      }
      resolve(session.getIdToken().getJwtToken());
    });
  });
}


handleNavLink = (event) => {
  event.preventDefault();
  this.props.history.push(event.currentTarget.getAttribute('href'));
}

handleLogout = (event) => {
  const currentUser = this.getCurrentUser();

  if (currentUser !== null) {
    currentUser.signOut();
  }

  if (AWS.config.credentials) {
    AWS.config.credentials.clearCachedId();
  }

  this.updateUserToken(null);

  this.props.history.push('/login');
}

  render() {
  const childProps = {
    userToken: this.state.userToken,
    updateUserToken: this.updateUserToken,
  };

  return ! this.state.isLoadingUserToken
  &&
  (
     
    
    <div className="App container">
     
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/">Bio</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/">Blog</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            { this.state.userToken
              ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
              : [ <RouteNavItem key={1} onClick={this.handleNavLink} href="/signup">Signup</RouteNavItem>,
                  <RouteNavItem key={2} onClick={this.handleNavLink} href="/login">Login</RouteNavItem> ] }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes childProps={childProps} />
    </div>
   

  );
}
 



}

export default withRouter(App);

/*
AM2017.06.03 - Creating a Login class to handle AWS Cognito user login functionality.
*/

//Main import statement from the base "react" library
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//Importing user controls from the "react-bootstrap" libary

//The Boot-Strap proejct has a set of controls we can use for our app
//If I want to make seperate controls I can create new ones.
import {
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';

// This is the animated Loader Button we use once user clicks login.
import LoaderButton from '../components/LoaderButton';

//Will need to create login.css
import './Login.css';

//Import the config for the AWS Cognito Pool for Login
import config from '../config.js';

//Import the amazon-cognito-identity-js package
//NOTE : had to run the npm and have it installed in the app prior to working
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser
} from 'amazon-cognito-identity-js';

//So basically, we are creating a encapsulated component that handles the 
// capability for login.  Notice how we can combine JavaScript, HTML, adn the event model.
//The React Render method pulls it all together.  Still not sure just yet why we are putting 
// this in a container folder vs. component.
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      username: '',
      password: '',
};
  }

  validateForm() {
    return this.state.username.length > 0
      && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  //Updated handleSubmit to create userToken via Cognito
  handleSubmit = async (event) => {
  event.preventDefault();

  this.setState({ isLoading: true });

  try {
    const userToken = await this.login(this.state.username, this.state.password);
    this.props.updateUserToken(userToken);
    this.props.history.push('/');
  }
  catch(e) {
    alert(e);
    this.setState({ isLoading: false });
  }
}

  //Add this method to leverage AWS Cognito pools
  //Creates teh Cognito User pool and user with teh credentials supplied
  //by user.
  login(username, password) {
  const userPool = new CognitoUserPool({
    UserPoolId: config.cognito.USER_POOL_ID,
    ClientId: config.cognito.APP_CLIENT_ID
  });
  const authenticationData = {
    Username: username,
    Password: password
  };

  const user = new CognitoUser({ Username: username, Pool: userPool });
  const authenticationDetails = new AuthenticationDetails(authenticationData);

  return new Promise((resolve, reject) => (
    user.authenticateUser(authenticationDetails, {
      onSuccess: (result) => resolve(result.getIdToken().getJwtToken()),
      onFailure: (err) => reject(err),
    })
  ));
  }



  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.username}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password" />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={ ! this.validateForm() }
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Here We Go ..." />
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
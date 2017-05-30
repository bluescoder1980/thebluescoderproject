/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>The Bluescoder Project</h2>
        </div>
        <p className="App-intro">
          This is where it all begins ... <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/

import React, { Component } from 'react';
import {
  withRouter,
  Link
} from 'react-router-dom';

import {
  Nav,
  Navbar
} from 'react-bootstrap';

import './App.css';
import Routes from './Routes';
import RouteNavItem from './components/RouteNavItem';

class App extends Component {
  
handleNavLink = (event) => {
  event.preventDefault();
  this.props.history.push(event.currentTarget.getAttribute('href'));
}

  render() {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <RouteNavItem onClick={this.handleNavLink} href="/signup">Signup</RouteNavItem>
            <RouteNavItem onClick={this.handleNavLink} href="/login">Login</RouteNavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}
 



}

export default withRouter(App);

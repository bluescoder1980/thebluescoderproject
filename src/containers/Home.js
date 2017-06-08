/*
  2017.06.07 - A.Maldonado : updated Home.js as the landing page for when user comes to site.
*/

// JavaScript allows us to import React libraries as well as CSS references.
import React, { Component } from 'react';
import './Home.css';

/*
  The Home component is our React component that will be our content when the user 
  Lands on the home page.  This will be the Pub Side of our site.  Still need to figure out
  Where we want to 'route' the user when they are logged in.
*/
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>The Bluescoder Project</h1>
          <p>"As Long As You Live, Keep Learning How To Live" - Seneca</p>
        </div>
      </div>
    );
  }
}

// have to export the Component you create
export default Home;
import { stack as Menu } from 'react-burger-menu';
import React, { Component}  from 'react';
import { withRouter } from 'react-router-dom';
import './SideBar.css';
import 'font-awesome/css/font-awesome.css';

class SideBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }

  render () {
    return (

      <Menu>
        <a id="home" className="menu-item" href="/"><i className="fa fa-home" aria-hidden="true"></i><span>Home</span></a>
          <a id="home" className="menu-item" href="/"><i className="fa fa-coffee" aria-hidden="true"></i><span>  Blog</span></a>
          <a id="home" className="menu-item" href="/"><i className="fa fa-code" aria-hidden="true"></i><span>  API's At Work</span></a>
          <a id="home" className="menu-item" href="/"><i className="fa fa-quote-right" aria-hidden="true"></i><span>  Submit A Quote</span></a>
          <a id="home" className="menu-item" href="/"><i className="fa fa-book" aria-hidden="true"></i><span>  Book Club</span></a>

      </Menu>


    );
  }
}

export default withRouter(SideBar);
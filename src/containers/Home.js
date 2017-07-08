/*
  2017.06.07 - A.Maldonado : updated Home.js as the landing page for when user comes to site.
*/

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  PageHeader,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import './Home.css';
//Import the awsLib helper class
import { invokeApig } from '../libs/awsLib';
import Lander from './Lander.js';


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      notes: [],
    };
  }

  //This method mounts the userToken to the requeast
  //and then invokes the Notes function Asynchronously.
  async componentDidMount() {
    if (this.props.userToken === null) {
      return;
    }

    this.setState({ isLoading: true });

    try {
      const results = await this.notes();
      this.setState({ notes: results });
    }
    catch(e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  //Function to invoke the API to get notes
  notes() {
    return invokeApig({ path: '/notes' }, this.props.userToken);
  }


  renderNotesList(notes) {
  return [{}].concat(notes).map((note, i) => (
    i !== 0
      ? ( <ListGroupItem
            key={note.notesId}
            href={`/notes/${note.notesId}`}
            onClick={this.handleNoteClick}
            header={note.content.trim().split('\n')[0]}>
              { "Created: " + (new Date(note.createdAt)).toLocaleString() }
          </ListGroupItem> )
      : ( <ListGroupItem
            key="new"
            href="/notes/new"
            onClick={this.handleNoteClick}>
              <h4><b>{'\uFF0B'}</b> Create a new note</h4>
          </ListGroupItem> )
  ));
}
  
  handleNoteClick = (event) => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));
  }

    renderLander() {
      return (
        <Lander/>
      );
    }

    renderNotes() {
      return (
      
        <div className="notes">
          <PageHeader>Daily Wisdom ...</PageHeader>
          <ListGroup>
            { ! this.state.isLoading
              && this.renderNotesList(this.state.notes) }
          </ListGroup>
        </div>
      
        
      );
    }

    renderFooter() {

      return (
        <div className="footer">
          <h2>Place Holder For Footer</h2>
        </div>
        );
    }

    render() {
      return (
        <div className="Home">
          { this.props.userToken === null
            ? this.renderLander()
            : this.renderNotes()
          }
        </div>
      );
    }
}

export default withRouter(Home);
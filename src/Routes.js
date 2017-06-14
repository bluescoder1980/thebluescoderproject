//AM2017.05.29
//This file is how we configure the route paths for our app
//For some reason teh following is not working :  <Route component={NotFound} /> ** Look into this later.
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './containers/Login';
import Home from './containers/Home'; 
import Signup from './containers/Signup';
import NewNote from './containers/NewNote';
import AppliedRoute from './components/AppliedRoute';
import Notes from './containers/Notes';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';


export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
	<UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
	<AuthenticatedRoute path="/notes/new" exact component={NewNote} props={childProps} />
	<AuthenticatedRoute path="/notes/:id" exact component={Notes} props={childProps} />
  </Switch>
);
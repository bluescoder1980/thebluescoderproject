//AM2017.05.29
//This file is how we configure the route paths for our app
//For some reason teh following is not working :  <Route component={NotFound} /> ** Look into this later.
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './containers/Login';
import Home from './containers/Home'; 
import Signup from './containers/Signup';

import AppliedRoute from './components/AppliedRoute';

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
  </Switch>
);
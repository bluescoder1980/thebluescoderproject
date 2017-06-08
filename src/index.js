/* 
	2017.06.07 - A.Maldonado - This class links the Index.html into our App Code base component where 
	all the majic happens.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
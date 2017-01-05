import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Router, Route, browserHistory } from 'react-router';

import firebase from './firebase';

function ensureLoggedIn (nextState, replace, done) {
  const user = firebase.auth().currentUser;
  if (!user) {
    replace('/login');
  }
  done();
}

import Login from './Login';
import Home from './Home';
import NewList from './NewList';

import auth from './auth';


function onAuthChanged (user) {
  if (user) {
    browserHistory.push('/');
  }
  else {
    browserHistory.push('/login');
  }
}

auth.onAuthStateChanged(onAuthChanged);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" onEnter={ensureLoggedIn} component={Home} />
    <Route path="login" component={Login} />
    <Route path="lists/new" component={NewList} />
  </Router> ,
  document.getElementById('root')
);

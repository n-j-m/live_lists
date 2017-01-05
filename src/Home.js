import React, { Component } from 'react';
import { Link } from 'react-router';

import firebase from './firebase';


const listsRef = firebase.database().ref('lists');

export default class Home extends Component {
  constructor () {
    super();
    this.state = {
      lists: []
    };
  }

  componentDidMount () {
    listsRef.on('value', (snap) => {
      this.setState({
        lists: snap.val()
      });
    });
  }

  render () {
    const lists = Object.keys(this.state.lists).map((key) => {
      const list = this.state.lists[key];
      return (
        <li>
          <Link to={`/lists/${key}`}>{list.name}</Link>
        </li>
      )
    });
    return (
      <div className="container">
        <div className="col-sm-4 col-sm-offset-4">
          <h1>My Lists</h1>
          <Link to="/lists/new">New List</Link>
          <ul>
          {lists}
          </ul>
        </div>
      </div>
    );
  }
}

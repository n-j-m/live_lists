import React, { Component } from 'react';
import firebase from './firebase';


const listRef = firebase.database().ref().child('lists');


export default class NewList extends Component {
  render () {
    return (
      <div className="container">
        <div className="col-sm-4 col-sm-offset-4">
          <form>
            <legend>New List</legend>
            <div className="form-group">
              <input ref={(input) => this.name = input} type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block" type="button"
                onClick={(ev) => this.onSave(ev)}>Save</button>
            </div>
            <div className="form-group">
              <button className="btn btn-default btn-block" type="button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  onSave (ev) {
    ev.preventDefault();
    const name = this.name.value;
    listRef.push({ name })
      .then(() => this.props.router.push('/'));
  }
}

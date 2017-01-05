import React, { Component } from 'react';
import auth from './auth';

export default class Login extends Component {
  constructor () {
    super();
    this.email = null;
    this.password = null;
  }
  render () {
    return (
      <div className="container">
        <div className="col-sm-4 col-sm-offset-4">
          <form>
            <div className="form-group">
              <input ref={(input) => this.email = input} type="email" className="form-control" placeholder="email"/>
            </div>
            <div className="form-group">
              <input ref={(input) => this.password = input} type="password" className="form-control" placeholder="password"/>
            </div>
            <button type="button" className="btn btn-primary"
              onClick={(ev) => this.onLogin(ev)}>Login In</button>
            <button type="button" className="btn btn-success"
              onClick={(ev) => this.onSignUp(ev)}>Sign Up</button>
          </form>
        </div>
      </div>
    )
  }

  onLogin (ev) {
    ev.preventDefault();
    auth.signInWithEmailAndPassword(this.email.value, this.password.value);
  }

  onSignUp (ev) {
    ev.preventDefault();
    auth.createUserWithEmailAndPassword(this.email.value, this.password.value);
  }
}

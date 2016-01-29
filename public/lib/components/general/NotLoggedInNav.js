import React from "react";

import UserActions from '../../actions/UserActions';

class NotLoggedInNav extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newUser: {},
      existingUser: {}
    };
  }

  updateExistingUser(key, e){
    this.state.existingUser[key] = e.target.value;
    this.setState(this.state);
  }

  updateNewUser(key, e){
    this.state.newUser[key] = e.target.value;
    this.setState(this.state);
  }

  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img src="lib/logo.png" />
              <p className="logoImage"> DCF</p>
            </a>

          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav navbar-right">
              <form className="navbar-form navbar-left" id="loginForm">
                <label htmlFor="loginForm" className="navbar-form navbar-left">LOGIN</label>
                <div className="form-group">
                  <input onChange={this.updateExistingUser.bind(this, 'username')} type="text" className="form-control" placeholder="username" />
                </div>
                <div className="form-group">
                  <input onChange={this.updateExistingUser.bind(this, 'password')} type="password" className="form-control" placeholder="password" />
                </div>
                <button onClick={this.props.login.bind(this, this.state.existingUser)} type="submit" className="btn btn-default">Submit</button>
              </form>

              <form className="navbar-form visible-xs-block">
                <label htmlFor="signUpForm" className="navbar-form navbar-left">SIGN UP</label>
                <div className="form-group">
                  <label htmlFor="username">Choose a username</label>
                  <input onChange={this.updateNewUser.bind(this, 'username')} type="text" className="form-control" id="username" placeholder="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="pass1">Password</label>
                  <input onChange={this.updateNewUser.bind(this, 'password1')} type="password" className="form-control" id="pass1" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label htmlFor="pass2">Confirm Password</label>
                  <input onChange={this.updateNewUser.bind(this, 'password2')} type="password" className="form-control" id="pass2" placeholder="Re-enter password" />
                </div>
                <button type="submit" className="btn btn-default" onClick={this.props.signUp.bind(this, this.state.newUser)} >Submit</button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NotLoggedInNav;

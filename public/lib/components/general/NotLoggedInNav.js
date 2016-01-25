import React from "react";

import UserActions from '../../actions/UserActions';

class NotLoggedInNav extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }

  updateUsername(e){
    this.setState({username: e.target.value})
  }
  updatePassword(e){
    this.setState({password: e.target.value})
  }

  submitRegistration(e){
    e.preventDefault();
    let newUserInfo = {};
    newUserInfo.password1 = this.refs.pass1.value;
    newUserInfo.password2 = this.refs.pass2.value;
    newUserInfo.username = this.refs.username.value;
    if (newUserInfo.password1 === newUserInfo.password2){
      
      UserActions.createNewUser(newUserInfo);
    } 
  }

  loginUser(e){
    e.preventDefault();
    UserActions.loginUser(this.state);
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
                  <input onChange={this.updateUsername.bind(this)} type="text" className="form-control" placeholder="username" />
                </div>
                <div className="form-group">
                  <input onChange={this.updatePassword.bind(this)} type="password" className="form-control" placeholder="password" />
                </div>
                <button onClick={this.loginUser.bind(this)} type="submit" className="btn btn-default">Submit</button>
              </form>

              <form className="navbar-form visible-xs-block">
                <label htmlFor="signUpForm" className="navbar-form navbar-left">SIGN UP</label>
                <div className="form-group">
                  <label htmlFor="username">Choose a username</label>
                  <input type="text" className="form-control" ref="username" id="username" placeholder="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="pass1">Password</label>
                  <input type="password" className="form-control" id="pass1" ref="pass1"  placeholder="Password" />
                </div>
                <div className="form-group">
                  <label htmlFor="pass2">Confirm Password</label>
                  <input type="password" className="form-control" id="pass2" ref="pass2" placeholder="Re-enter password" />
                </div>
                <button type="submit" className="btn btn-default" onClick={this.submitRegistration.bind(this)} >Submit</button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NotLoggedInNav;

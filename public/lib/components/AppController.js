import React from "react";
import {Link, hashHistory} from 'react-router';

import UserStore from "../stores/UserStore";
import UserActions from "../actions/UserActions";

import ErrorStore from '../stores/ErrorStore';

import NavBar from "./general/NavBar";

let _getAppState = () => {
  return {
    user: UserStore.getUserInfo()
  }
}

class AppController extends React.Component{
  constructor(props){
    super(props);
    this.state = _getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount(){
    if (document.cookie.match(/token/)){
      UserActions.fetchUserInfo();
    }

    UserStore.getUserInfo(); // undefined if not logged in,
    UserStore.startListening(this._onChange); // listen for log in

    ErrorStore.startListening(this._onError); // listen for errors
  }

  componentWillUnmount(){
    UserStore.stopListening(this._onChange);
    ErrorStore.stopListening(this._onError);
  }

  _onChange(){
    this.setState(_getAppState());
  }

  _onError(){
    swal('Oops!', ErrorStore.getError().responseText, "error")
  }

  signUp(newUser, event){
    event.preventDefault();
    if (!newUser.username){
      swal('Oops!', "Please enter a new username.", "error")
    } else if (!newUser.password1 || !newUser.password2){
      swal('Oops!', "Please enter a new password", "error")
    } else if (newUser.password1 !== newUser.password2){
      swal('Oops!', "Passwords must match.", "error")
    } else {
      UserActions.createNewUser(newUser);
    }
  }

  login(existingUser, event){
    event.preventDefault();
    if (!existingUser.username){
      swal('Oops!', "Please enter your username.", "error")
    } else if (!existingUser.password){
      swal('Oops!', "Please enter your password", "error")
    } else {
      UserActions.loginUser(existingUser);
    }
  }

  render(){
    return (
      <div className="app">
        <NavBar login={this.login.bind(this)} signUp={this.signUp.bind(this)} user={this.state.user} />
        {this.props.children}
      </div>
    )
  }
}

export default AppController

import React from "react";
import {Link, hashHistory} from 'react-router';

import UserStore from "../../stores/UserStore";
import UserActions from '../../actions/UserActions';
import PostStore from '../../stores/PostStore';
import PostActions from '../../actions/PostActions';


import LoggedInHome from './LoggedInHome';
import NotLoggedInHome from './NotLoggedInHome';

import SweetAlert from 'sweetalert';


let _getHomeState = () => {
  return {
    posts: PostStore.getAllPosts(),
    user: UserStore.getUserInfo()
  }
}

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = _getHomeState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount(){

    UserStore.getUserInfo(); // undefined if not logged in,
    UserStore.startListening(this._onChange); // listen for log in

    PostActions.getAllPosts(); // get all posts on page load
    PostStore.startListening(this._onChange); // listen for new posts
  }

  componentWillUnmount(){
    UserStore.stopListening(this._onChange);
    PostStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState(_getHomeState());
  }

  signUp(user, event){
    event.preventDefault();
    if (!user.username){
      swal('Oops!', "Please enter a new username.", "error")
    } else if (!user.password1 || !user.password2){
      swal('Oops!', "Please enter a new password", "error")
    } else if (user.password1 !== user.password2){
      swal('Oops!', "Passwords must match.", "error")
    } else {
      UserActions.createNewUser(user);
    }
  }

  render(){
    console.log('home state', this.state);
    let home = this.state.user
              ? <LoggedInHome user={this.state.user} posts={this.state.posts} />
              : <NotLoggedInHome signUp={this.signUp.bind(this)} posts={this.state.posts} />
    return (
      <div>
        {home}
      </div>
    )
  }
}

export default Home

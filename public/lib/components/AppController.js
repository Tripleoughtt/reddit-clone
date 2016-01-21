import React from "react";
import {Link, browserHistory} from 'react-router';
import NavBarDefault from "../components/NavBarDefault";
import SignUpForm from "../components/SignUpForm";
import PostFeed from "../components/PostFeed";

import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';

import PostActions from '../actions/PostActions';
import PostStore from '../stores/PostStore';

let _getAppState = () => {
  return {
    posts: PostStore.getAllPosts(),
    user: UserStore.getUserInfo()
  }
}

class AppController extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }


  render(){
    return(
      <div className="app">
        {this.props.children}
      </div>
    )
  }
}

export default AppController

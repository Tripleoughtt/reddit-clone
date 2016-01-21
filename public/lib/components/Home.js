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

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = { };
  }

  componentDidMount(){
    PostActions.getAllPosts();
    PostStore.startListening(this._onChange.bind(this));

    UserActions.getUserInfo();
    UserStore.startListening(this._onChange.bind(this));
  }

  componentWillUnmount(){
    PostStore.stopListening(this._onChange.bind(this));

    UserStore.stopListening(this._onChange.bind(this));
  }

  _onChange() {
    console.log('5', this.state);
    if (_getAppState()){
      this.setState(_getAppState());

      if (this.state.user){
        browserHistory.push('/home');
      }
    }
  }
  render(){
    return(
      <div className="homeComponent">
        <NavBarDefault />
        <SignUpForm />

        <Link to={`home`}>Home</Link>
      </div>
    )
  }
}

export default Home

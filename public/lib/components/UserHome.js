import React from "react";
import {Link, browserHistory} from 'react-router';

import NavBarUser from "../components/NavBarUser";
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

class UserHome extends React.Component{
  constructor(props){
    super(props);
    this.state = _getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount(){
    PostActions.getAllPosts();
    PostStore.startListening(this._onChange);

    // UserActions.getUserInfo();
    UserStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    PostStore.stopListening(this._onChange);

    UserStore.stopListening(this._onChange);
  }

  _onChange() {
    console.log('5', this.state);
    this.setState(_getAppState());

      // if (this.state.user){
      //   browserHistory.push('/home');
      // }
  }

  render(){
    return(
      <div className="UserHomeComponent">
        <NavBarUser />
        <PostFeed posts={this.state.posts} />
        <Link to="addpost" className="btn btn-primary btn-lg">Add A New Post</Link>
      </div>
    )
  }
}

export default UserHome

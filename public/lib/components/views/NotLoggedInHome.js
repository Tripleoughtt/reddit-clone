import React from "react";
import {Link, hashHistory} from 'react-router';

import NotLoggedInNav from "../general/NotLoggedInNav";
import SignUpForm from "../general/SignUpForm";
import PostFeed from "../general/PostFeed";
import TagCloud from "../general/TagCloud";

import UserStore from '../../stores/UserStore';
import UserActions from '../../actions/UserActions';

import PostActions from '../../actions/PostActions';
import PostStore from '../../stores/PostStore';
import SweetAlert from 'sweetalert'

import {get} from 'jquery';

let _getAppState = () => {
  return {
    posts: PostStore.getAllPosts(),
    user: UserStore.getUserInfo(),
    error: UserStore.getLoginError()
  }
}

class NotLoggedInHome extends React.Component{
  constructor(props){
    super(props);
    this.state = _getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount(){
    (function authorize(){
      get('/users/authorize').then((res) => {
        if (res === "Error with authentication, please try again!"){
          hashHistory.push('/');
        }
        hashHistory.push('home');
      }, (err) => {

        hashHistory.push('/');
      })
    })()
  }

  componentDidMount(){
    PostActions.getAllPosts();
    PostStore.startListening(this._onChange);

    UserStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    PostStore.stopListening(this._onChange);

    UserStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState(_getAppState());

    if (this.state.user){
      hashHistory.push('/home');
    } else if (this.state.error){
      let errorMessage = this.state.error.responseText;
      swal('Sorry!', errorMessage, "error")
    }
  }

  filterByTag(tag){
    this.setState({filterByTag: tag});
  }

  render(){
    let posts = this.state.posts;
    if (this.state.filterByTag){
      let regex = new RegExp(this.state.filterByTag, 'gi');
      posts = posts.filter(post => {
        return post.tags.some(tag => tag.match(regex));
      });
    }
    console.log(posts);
    return(
      <div className="homeComponent">
        <NotLoggedInNav />
        <div className="hidden-xs col-sm-2">
          <TagCloud posts={this.state.posts} filterByTag={this.filterByTag.bind(this)} />
        </div>
        <div className="col-xs-12 col-sm-10" id="feed">
          <PostFeed posts={posts} />
        </div>
      </div>
    )
  }
}

export default NotLoggedInHome

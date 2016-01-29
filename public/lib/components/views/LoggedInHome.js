import React from "react";
import {Link, hashHistory} from 'react-router';

import LoggedInNav from "../general/LoggedInNav";
import SignUpForm from "../general/SignUpForm";
import PostFeed from "../general/PostFeed";
import UserModal from "../general/UserModal";

import UserStore from '../../stores/UserStore';
import UserActions from '../../actions/UserActions';

import PostActions from '../../actions/PostActions';
import PostStore from '../../stores/PostStore';
import {get} from 'jquery';

let _getAppState = () => {
  return {
    posts: PostStore.getAllPosts(),
    user: UserStore.getUserProfile()
  }
}

class LoggedInHome extends React.Component{
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
        return true
      }, (err) => {

        hashHistory.push('/');
      })
    })()

  }

  componentDidMount(){
    PostActions.getAllPosts();
    PostStore.startListening(this._onChange);
    UserActions.fetchUserInfo();
    UserStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    PostStore.stopListening(this._onChange);

    UserStore.stopListening(this._onChange);

  }

  _onChange() {
    this.setState(_getAppState());

  }

  filterPosts(e){
    this.setState({ filter: e.target.value });
  }

  openUserModal(post){

    this.setState({ userModalInfo: post.author })
  }

  render(){
    let posts = this.state.posts;
    if (this.state.filter){
      let regex = new RegExp(this.state.filter, 'gi');
      posts = posts.filter(post => {
        return post.title.match(regex) || post.body.match(regex);
      })
    }
    return(
      <div className="loggedInHomeComponent">
        <div className="container-fluid loggedInHome">
          <div className="row">
            <div className="col-xs-12 col-sm-3 pull-right text-center sidebar">
              <div className="row">
                <div className="col-xs-6 col-sm-12">
                  <input onChange={this.filterPosts.bind(this)} type="text" placeholder="Search posts..." className="filterPostsInput" />
                </div>
                <div className="col-xs-6 col-sm-12">
                  <Link to="addpost" className="btn btn-primary btn-lg">Add A New Post</Link>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9">
              <PostFeed openUserModal={this.openUserModal.bind(this)} posts={posts} user={this.state.user} />
            </div>
            <UserModal userInfo={this.state.userModalInfo} />
          </div>
        </div>
      </div>
    )
  }
}

export default LoggedInHome

import React from "react";
import {Link, hashHistory} from 'react-router';

import LoggedInNav from "../general/LoggedInNav";
import SignUpForm from "../general/SignUpForm";
import PostFeed from "../general/PostFeed";

import UserStore from '../../stores/UserStore';
import UserActions from '../../actions/UserActions';

import PostActions from '../../actions/PostActions';
import PostStore from '../../stores/PostStore';
// import authorize from '../../authorize';
import {get} from 'jquery';

let _getAppState = () => {
  return {
    posts: PostStore.getAllPosts(),
    user: UserStore.getUserInfo()
  }
}

class LoggedInHome extends React.Component{
  constructor(props){
    super(props);
    this.state = _getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount(){
    // console.log('before mount!',authorize())
    // if (!authorize()){
    //   hashHistory.push('/');
    // }

    (function authorize(){
      get('/users/authorize').then((res) => {
        if (res === "Error with authentication, please try again!"){
          hashHistory.push('/');
        }
        return true
      }, (err) => {
        console.log(err)
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
    console.log('home unmounting');
  }

  _onChange() {
    this.setState(_getAppState());

  }

  render(){

    return(
      <div className="loggedInHomeComponent">
        <LoggedInNav />
        <div className="container-fluid loggedInHome">
          <div className="row">
            <div className="col-xs-12 text-center sidebar">
              <Link to="addpost" className="btn btn-primary btn-lg">Add A New Post</Link>
            </div>
            <PostFeed posts={this.state.posts} />
          </div>
        </div>
      </div>
    )
  }
}

export default LoggedInHome

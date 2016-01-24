import React from "react";
import {Link, hashHistory} from 'react-router';

import NotLoggedInNav from "../general/NotLoggedInNav";
import SignUpForm from "../general/SignUpForm";
import PostFeed from "../general/PostFeed";

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
  render(){
    return(
      <div className="homeComponent">
        <NotLoggedInNav />
        <div className='container-fluid greeting'>
          <div className="row">
            <div className="col-xs-12 col-sm-offset-2 col-sm-8 text-center greetingText">
              <h1>Welcome to Dev Camp Fire</h1>
              <h4>A forum for dev camp alumni, current dev camp students, and people interested in dev bootcamps to connect and ask questions</h4>
            </div>
          </div>
        </div>
        <SignUpForm />
        <PostFeed posts={this.state.posts} />
      </div>
    )
  }
}

export default NotLoggedInHome

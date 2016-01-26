import React from "react";
import {Link, hashHistory} from 'react-router';

import NotLoggedInNav from "../general/NotLoggedInNav";
import SignUpBanner from "../general/SignUpBanner";
import PostFeed from "../general/PostFeed";
import TagCloud from "../general/TagCloud";

import UserStore from '../../stores/UserStore';
import UserActions from '../../actions/UserActions';

import PostActions from '../../actions/PostActions';
import PostStore from '../../stores/PostStore';
import SweetAlert from 'sweetalert';

import classNames from "classnames";

import {get} from 'jquery';

let _getAppState = () => {
  return {
    posts: PostStore.getAllPosts(),
    user: UserStore.getUserInfo(),
    error: UserStore.getLoginError(),
    hideSignUpBanner: false
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
    if (this.state.filtering){
      let atIndex;
      let shouldRemoveTag = this.state.filterByTags.some((currentlyFilteringTag, i) => {
        if (tag === currentlyFilteringTag){
          atIndex = i;
          return currentlyFilteringTag;
        }
      });
      if (shouldRemoveTag){
        let filterByTags = this.state.filterByTags;
        filterByTags.splice(atIndex, 1);
        this.setState({
          filterByTags: filterByTags,
          filtering: this.state.filterByTags.length ? true : false
        });
      } else {
        this.setState({
          filterByTags: this.state.filterByTags.concat(tag)
        })
      }
    } else {
      this.setState({
        filterByTags: this.state.filterByTags ? this.state.filterByTags.concat(tag) : [tag],
        filtering: true
      });
    }
  }

  toggleSignUpBanner(){
    this.setState({ hideSignUpBanner: !this.state.hideSignUpBanner })
  }

  render(){
    let posts = this.state.posts;
    if (this.state.filtering){
      this.state.filterByTags.forEach(filterByTag => {
        let regex = new RegExp(filterByTag, 'gi');
        posts = posts.filter(post => {
          return post.tags.some(tag => tag.match(regex));
        });
      })
    }

    let currentlyFilteringTags = this.state.filterByTags || [];

    let dismiss = this.state.hideSignUpBanner ? 'Join The Camp Fire!' : 'Dismiss';
    let glyphicon = this.state.hideSignUpBanner ? classNames('glyphicon glyphicon-menu-down') : classNames('glyphicon glyphicon-menu-up');

    return(
      <div className="homeComponent">
        <NotLoggedInNav />
        <div className="container-fluid">
          <div className="row greeting text-center">
            <div className="collapse in" id="signUpBanner" aria-expanded="true">
              <div className='col-xs-12 col-sm-6'>
                <h1>What Are You Waiting For?</h1>
                <h4>Dev Camp Fire Is A Community For Dev BootCamp Alumni, Current Students, And <strong>You!</strong></h4>
              </div>
              <div className='col-xs-12 col-sm-6'>
                <SignUpBanner />
              </div>
            </div>
            <div className="col-xs-12">
              <button onClick={this.toggleSignUpBanner.bind(this)} data-toggle="collapse" className="toggleSignUpBanner" data-target="#signUpBanner" type="button">
                <span className={glyphicon} aria-hidden="true"></span>
                &nbsp;{dismiss}&nbsp;
                <span className={glyphicon} aria-hidden="true"></span>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="hidden-xs col-sm-2 tagCloud">
              <h4>Popular Tags:</h4>
              <TagCloud posts={this.state.posts} filterByTag={this.filterByTag.bind(this)} currentlyFilteringTags={currentlyFilteringTags} />
            </div>
            <div className="col-xs-12 col-sm-10" id="feed">
              <PostFeed posts={posts} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NotLoggedInHome

import React from "react";
import {Link, hashHistory} from 'react-router';

import SignUpBanner from "../general/SignUpBanner";
import PostFeed from "../general/PostFeed";
import TagCloud from "../general/TagCloud";
import UserModal from "../general/UserModal";

import SweetAlert from 'sweetalert';

import classNames from "classnames";

import {get} from 'jquery';

class NotLoggedInHome extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hideSignUpBanner: false
    };
  }

  componentWillMount(){
    // (function authorize(){
    //   get('/users/authorize').then((res) => {
    //     if (res === "Error with authentication, please try again!"){
    //       hashHistory.push('/');
    //     }
    //     hashHistory.push('home');
    //   }, (err) => {
    //
    //     hashHistory.push('/');
    //   })
    // })()
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

  openUserModal(post){
    this.setState({ userModalInfo: post.author })
  }

  render(){
    let posts = this.props.posts;
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
        <div className="container-fluid">
          <div className="row greeting text-center">
            <div className="collapse in" id="signUpBanner" aria-expanded="true">
              <div className='col-xs-12 col-sm-6'>
                <h1>What Are You Waiting For?</h1>
                <h4>Dev Camp Fire Is A Community For Dev BootCamp Alumni, Current Students, And <strong>You!</strong></h4>
              </div>
              <div className='col-xs-12 col-sm-6'>
                <SignUpBanner signUp={this.props.signUp} />
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
              <TagCloud posts={this.props.posts} filterByTag={this.filterByTag.bind(this)} currentlyFilteringTags={currentlyFilteringTags} />
            </div>
            <div className="col-xs-12 col-sm-10" id="feed">
              <PostFeed openUserModal={this.openUserModal.bind(this)} posts={posts} />
            </div>
            <UserModal userInfo={this.state.userModalInfo} />
          </div>
        </div>
      </div>
    )
  }
}

export default NotLoggedInHome

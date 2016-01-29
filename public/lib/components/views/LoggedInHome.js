import React from "react";
import {Link, hashHistory} from 'react-router';

import LoggedInNav from "../general/LoggedInNav";
import SignUpForm from "../general/SignUpForm";
import PostFeed from "../general/PostFeed";
import UserModal from "../general/UserModal";
import TagCloud from "../general/TagCloud";

import {get} from 'jquery';

class LoggedInHome extends React.Component{
  constructor(props){
    super(props);
    this.state = { };
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

  filterPosts(e){
    this.setState({ filter: e.target.value });
  }

  openUserModal(post){
    this.setState({ userModalInfo: post.author })
  }

  render(){
    let posts = this.props.posts;
    if (this.state.filter){
      let regex = new RegExp(this.state.filter, 'gi');
      posts = posts.filter(post => {
        return post.title.match(regex) || post.body.match(regex);
      })
    }
    if (this.state.filtering){
      this.state.filterByTags.forEach(filterByTag => {
        let regex = new RegExp(filterByTag, 'gi');
        posts = posts.filter(post => {
          return post.tags.some(tag => tag.match(regex));
        });
      })
    }

    let currentlyFilteringTags = this.state.filterByTags || [];

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
                <div className="hidden-xs col-sm-12 tagCloud">
                  <h4>Popular Tags:</h4>
                  <TagCloud posts={this.props.posts} filterByTag={this.filterByTag.bind(this)} currentlyFilteringTags={currentlyFilteringTags} />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9">
              <PostFeed openUserModal={this.openUserModal.bind(this)} posts={posts} user={this.props.user} />
            </div>
            <UserModal userInfo={this.state.userModalInfo} />
          </div>
        </div>
      </div>
    )
  }
}

export default LoggedInHome

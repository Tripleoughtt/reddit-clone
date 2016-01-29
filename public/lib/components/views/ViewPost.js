import React from "react";
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';

import LoggedInNav from '../general/LoggedInNav';
import NotLoggedInNav from '../general/NotLoggedInNav';
import Comment from '../general/Comment';
import Tag from '../general/Tag';

import PostActions from '../../actions/PostActions';
import PostStore from '../../stores/PostStore';

import UserStore from '../../stores/UserStore';
import UserActions from '../../actions/UserActions';

import AddCommentOnPost from '../general/AddCommentOnPost'
import marked from 'marked';

import SweetAlert from "sweetalert";

let _getComponentState = () => {
  return {
    post: PostStore.getPost(),
    user: UserStore.getUserInfo(),
    editing: false
  }
}

class ViewPost extends React.Component{
  constructor(props){
    super(props);
    this.state = _getComponentState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount(){
    PostActions.getPostInfo(this.props.params.postId);
    PostStore.startListening(this._onChange);

    UserActions.fetchUserInfo();
    UserStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    PostStore.stopListening(this._onChange);
    UserStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState(_getComponentState());

  }

  rawMarkup() {
    return { __html: marked(this.state.post.body, {sanitize: true}) };
  }

  handleEditClick() {
    if(this.state.editing) {
      // get new title, body, tags elements
      let $titleArea = $('.viewPostTitle h1');
      let $bodyArea = $('.viewPostBody div div');

      // extract new values
      let title = $titleArea.find('input').val();
      let body = $bodyArea.find('textarea').val();

      if (!title || !body){
        return swal('Oops!', "Please enter both a title and body for your post.", "error");
      }
      // update post
      PostActions.updatePost({ title: title, body: body }, this.state.post._id);

      // clear title, body, tags inputs
      $titleArea.empty()
      $bodyArea.empty();

      // set title, body, tags to new values
      $titleArea.text(title);
      $bodyArea.html(marked(body));

      // change save button to edit button
      $('.edit-btn').text('Edit Post');

      // revert state
      this.setState({ editing: false });
    } else {
      let $currentTitle = $('.viewPostTitle h1');
      let title = $currentTitle.text();

      let $body = $('.viewPostBody div div');
      $body.empty();

      $body.append($('<textarea style="margin-left: 10px; height: 250px; width: 90%;">').text(this.state.post.body));

      $currentTitle.empty();
      $currentTitle.append($(`<input type='text' value=${title} />`));
      $('.edit-btn').text('Save Post');

      this.setState({ editing: true });
    }
  }

  displayEditButton() {
    if(this.state.user && this.state.user._id === this.state.post.author) {
      return (
        <div className="row">
          <button className='edit-btn btn btn-primary' onClick={this.handleEditClick.bind(this)}>Edit Post</button>
        </div>
      );
    }
  }

  displayCommentButton() {
    if(this.state.user) return(<AddCommentOnPost id={this.state.post._id} />);
  }

  render(){
    if (!this.state.post) {
      return (
        <div></div>
      )
    }
    let comments;
    if (this.state.post.comments) {
      let postId = this.state.post._id;
      comments = this.state.post.comments.map(comment => {
        return <Comment  postId={postId} data={comment} key={comment._id} user={this.state.user} />
      })
    }

    let tags;
    if (this.state.post.tags){
      tags = this.state.post.tags.map((tag, i) => {
        return <Tag key={i} name={tag} />
      })
    }

    return(
      <div className="viewPostComponent">
        <div className="container-fluid text-left postArea">
          <div className="row">
            <div className="col-xs-12 col-sm-11 viewPostTitle">
              <h1>{this.state.post.title}</h1>
              <hr />
            </div>
          </div>
          <div className="row viewPostBody">
            <div className="col-xs-12 col-sm-11">
              <div dangerouslySetInnerHTML={this.rawMarkup()}></div>
              <hr />
            </div>
          </div>

            {this.displayEditButton()}

          <div className="row viewTags">
            <div className="col-xs-12 col-sm-11">
              {tags}
            </div>
          </div>
          <div className="row">
            {this.displayCommentButton()}
          </div>
        </div>

        <div className="container-fluid commentsArea">
          <div className="row">
            <div className="col-xs-12">
              {comments}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewPost

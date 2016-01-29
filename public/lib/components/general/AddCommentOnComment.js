import React from "react";
import {Link} from 'react-router';
import $ from 'jquery';
import CommentActions from '../../actions/CommentActions';

import SweetAlert from "sweetalert";

class AddCommentOnComment extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }

  toggleCommentInput(){
    $(this.refs.hiddenInput).toggleClass('hideInput');
  }

  addComment(){
    let commentText = this.refs.commentText.value;
    if (!commentText){
      return swal("Oops", "Please enter a comment!", "error");
    }
    let data = {postId: this.props.postId, commentId: this.props.commentId, body: commentText};
    this.toggleCommentInput();
    this.refs.commentText.value = ''
    CommentActions.createNewCommentOnComment(data);
  }

  displayAddButton() {

  }

  render(){
    return(
      <div className="addCommentComponent">
        <button onClick={this.toggleCommentInput.bind(this)} ><i className="fa fa-plus"></i></button>
        <div ref="hiddenInput" className="hideInput">
          <textarea className="commentText" ref="commentText"  name="" rows="5"></textarea>
          <button className="submit btn btn-primary" onClick={this.addComment.bind(this)} >Submit Comment!</button>
        </div>
      </div>
    )
  }
}

export default AddCommentOnComment

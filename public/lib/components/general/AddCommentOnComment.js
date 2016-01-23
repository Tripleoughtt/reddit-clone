import React from "react";
import {Link} from 'react-router';
import $ from 'jquery';
import CommentActions from '../../actions/CommentActions';

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
    let data = {postId: this.props.postId, commentId: this.props.commentId, body: commentText};
    this.toggleCommentInput();
    CommentActions.createNewCommentOnComment(data);
  }

  render(){
    return(
      <div className="addCommentComponent">
        <button onClick={this.toggleCommentInput.bind(this)} ><i className="fa fa-plus"></i></button>
        <div ref="hiddenInput" className="hideInput">
          <textarea className="commentText" ref="commentText"  name="" rows="5"></textarea>
          <button className="submit" onClick={this.addComment.bind(this)} >Submit Comment!</button>
        </div>
      </div>
    )
  }
}

export default AddCommentOnComment

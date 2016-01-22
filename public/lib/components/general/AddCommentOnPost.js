import React from "react";
import {Link} from 'react-router';
import $ from 'jquery';
import CommentActions from '../../actions/CommentActions';

class AddCommentOnPost extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  
  toggleCommentInput(){
    $(this.refs.hiddenInput).toggleClass('hide');
  }

  addComment(){
    let commentText = this.refs.commentText.value;
    var data = {postId: this.props.id, commentText: commentText};
    CommentActions.createNewCommentOnPost(data)

  }

  render(){
    console.log(this.props.id)
    return(
      <div className="addCommentComponent">
        <button onClick={this.toggleCommentInput.bind(this)} >Add Comment!</button>
        <div ref="hiddenInput" className="hide">
          <textarea className="commentText" ref="commentText"  name="" rows="5"></textarea>
          <button className="submit" onClick={this.addComment.bind(this)} >Submit Comment!</button>
        </div>
      </div>
    )
  }
}

export default AddCommentOnPost

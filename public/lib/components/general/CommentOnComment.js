import React from "react";
import {Link} from 'react-router';
import $ from 'jquery';
import AddCommentOnComment from './AddCommentOnComment';

class CommentOnComment extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }

  render(){
    let comments;
    let commentId = this.props.data._id
    let postId = this.props.postId;
    if (this.props.data.comments.length){
      comments = this.props.data.comments.map(comment => {
        console.log('IN COMMENT ON COMMENT MAP (DATAS): ', comment)
        return <CommentOnComment postId={postId} data={comment} key={comment._id} />
      });
    }
    console.log('COMMENTS BEFORE RENDER!!!',comments)
    return(
      <div className="col-xs-12 commentComponent">
        <p>{this.props.data.body}</p>
        <h5>- {this.props.data.author.username}</h5>
        <AddCommentOnComment commentId={commentId} postId={this.props.postId} />
        <div className="row">
          <div className="col-xs-offset-1 col-xs-11 subcomments">
            {comments}
          </div>
        </div>
      </div>
    )
  }
}

export default CommentOnComment

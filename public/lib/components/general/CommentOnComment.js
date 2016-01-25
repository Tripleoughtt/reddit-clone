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
        return <CommentOnComment postId={postId} data={comment} key={comment._id} />
      });
    }
    let authorDisplayName = this.props.data.author.name;
    let author;
    if(authorDisplayName){
      author = authorDisplayName;
    } else {
      author = this.props.data.author.username;
    }

    return(
      <div className="col-xs-12 commentComponent">
        <div className="well well-sm">
          <p>{this.props.data.body} - <em>{author}</em></p>
          <AddCommentOnComment commentId={commentId} postId={this.props.postId} />
          <div className="row">
            <div className="col-xs-offset-1 col-xs-11 subcomments">
              {comments}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentOnComment

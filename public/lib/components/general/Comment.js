import React from "react";
import {Link} from 'react-router';
import $ from 'jquery';
import CommentOnComment from './CommentOnComment';
import AddCommentOnComment from './AddCommentOnComment';

class Comment extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }


  render(){
    let comments;
    let commentId = this.props.data._id
    if (this.props.data.comments){
      let postId = this.props.postId;
      comments = this.props.data.comments.map(comment => {
        return <CommentOnComment postId={postId} data={comment} key={comment._id} />
      });
    }
    return(
      <div className="col-xs-12 commentComponent">
        <div className='well well-sm'>
          <p>{this.props.data.body} - <em>{this.props.data.author.username}</em></p>
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

export default Comment

import React from "react";
import {Link} from 'react-router';
import $ from 'jquery';

class CommentOnComment extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }

  render(){
    let comments;
    let commentId = this.props.data._id
    if (this.props.data.comments){
      comments = this.props.data.comments.map(comment => {
        return <CommentOnComment data={comment} key={comment._id} />
      });
    }
    return(
      <div className="col-xs-12 commentComponent">
        <p>{this.props.data.body}</p>
        <h5>- {this.props.data.author.username}</h5>
        <div className="row">
          <div className="col-xs-offset-1 col-xs-11 subcomments hide">
            {comments}
          </div>
        </div>
      </div>
    )
  }
}

export default CommentOnComment

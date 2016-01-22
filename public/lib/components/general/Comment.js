import React from "react";
import {Link} from 'react-router';
import $ from 'jquery';
import CommentOnComment from './CommentOnComment';

class Comment extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }

  toggleComments(e){
    $(e.target).closest('.row').find('.subcomments').toggleClass('hide');
  }

  render(){
    let comments;
    let commentId = this.props.data._id
    if (this.props.data.comments){
      comments = this.props.data.comments.map(comment => {
        console.log('inside comment map loop', comment)
        return <CommentOnComment data={comment} key={comment._id} />
      });
    }
    return(
      <div className="col-xs-12 commentComponent">
        <p>{this.props.data.body}</p>
        <h5>- {this.props.data.author.username}</h5>
        <div className="row">
          <div onClick={this.toggleComments.bind(this)} className="pull-right">
            <p>Show comments <span className="caret"></span></p>
          </div>
          <div className="col-xs-offset-1 col-xs-11 subcomments hide">
            {comments}
          </div>
        </div>
      </div>
    )
  }
}

export default Comment

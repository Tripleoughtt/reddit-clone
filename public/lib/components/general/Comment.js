import React from "react";
import {Link} from 'react-router';
import $ from 'jquery';
import CommentOnComment from './CommentOnComment';
import AddCommentOnComment from './AddCommentOnComment';
import classNames from 'classnames'

class Comment extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  upVote(){
    PostActions.upVote(this.props.data._id);
  }

  downVote(){
    PostActions.downVote(this.props.data._id);
  }


  render(){
    //let upColor = this.props.data.votes.some(voteObj => voteObj.user == userId && voteObj.vote);
    //let downColor = this.props.data.votes.some(voteObj => voteObj.user == userId && !voteObj.vote);

    let upArrow = classNames({
      'glyphicon': true,
      'glyphicon-arrow-up': true,
      //'highlight': upColor
      // 'noUser': !userId
    });
    let downArrow = classNames({
      'glyphicon': true,
      'glyphicon-arrow-down': true,
      //'highlight': downColor
      // 'noUser': !userId
    });
    let comments;
    let commentId = this.props.data._id
    if (this.props.data.comments){
      let postId = this.props.postId;
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
      <div className="commentComponent">
        <div className="row">
          <div className='well well-sm'>
            <div className="voteArea col-xs-1">
              <h4>
                <span onClick={this.upVote.bind(this)} className={upArrow} aria-hidden="true"></span>
                <br />
                &nbsp;0
                <br />
                <span onClick={this.downVote.bind(this)} className={downArrow} aria-hidden="true"></span>
              </h4>
            </div>
            <div className="col-xs-11">
              <p className="">{this.props.data.body}</p> 
              <div>
                <img className="profilePicDisplay" src={this.props.data.author.profilePic}  />
                <span> - <em>{author}</em></span>
              </div>
              <AddCommentOnComment commentId={commentId} postId={this.props.postId} />
            </div>
            <div className="row">
              <div className="col-xs-offset-1 col-xs-11 subcomments">
                {comments}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comment

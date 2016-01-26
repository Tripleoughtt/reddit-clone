import React from "react";
import {Link} from 'react-router';
import $ from 'jquery';
import CommentOnComment from './CommentOnComment';
import CommentActions from '../../actions/CommentActions';
import AddCommentOnComment from './AddCommentOnComment';
import classNames from 'classnames'

class Comment extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  upVote(){
    CommentActions.upVote(this.props.data._id, this.props.postId);
  }

  downVote(){
    CommentActions.downVote(this.props.data._id, this.props.postId);
  }

  displayAddButton() {
    if(this.props.user) return (<AddCommentOnComment commentId={this.props.data._id} postId={this.props.postId} />);
  }

  render(){
    console.log(this.props.user)
    let userId = this.props.user ? this.props.user._id : false;
    let upColor = this.props.data.votes.some(voteObj => voteObj.user == userId && voteObj.vote);
    let downColor = this.props.data.votes.some(voteObj => voteObj.user == userId && !voteObj.vote);
    let votes = this.props.data.votes.reduce((a, voteObj) => voteObj.vote ? a + 1 : a - 1, 0) || 0;

    let upArrow = classNames({
      'glyphicon': true,
      'glyphicon-arrow-up': true,
      'highlight': upColor
      // 'noUser': !userId
    });
    let downArrow = classNames({
      'glyphicon': true,
      'glyphicon-arrow-down': true,
      'highlight': downColor
      // 'noUser': !userId
    });
    let comments;
    let commentId = this.props.data._id
    if (this.props.data.comments){
      let postId = this.props.postId;
      comments = this.props.data.comments.map(comment => {
        return <CommentOnComment user={this.props.user} postId={postId} data={comment} key={comment._id} />
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
        <div className="panel panel-default">
          <div className=''>
            <div className="voteArea col-xs-1">
              <h4>
                <span onClick={this.upVote.bind(this)} className={upArrow} aria-hidden="true"></span>
                <br />
                &nbsp;{votes}
                <br />
                <span onClick={this.downVote.bind(this)} className={downArrow} aria-hidden="true"></span>
              </h4>
            </div>
            <div className="panel-body commentDiv">
              <p className="commentText">{this.props.data.body}</p> 
              <div>
                <img className="profilePicDisplay" src={this.props.data.author.profilePic}  />
                <span> - <em>{author}</em></span>
              </div>
              {this.displayAddButton()}
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

export default Comment;

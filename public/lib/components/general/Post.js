import React from "react";
import {Link} from 'react-router';
import classNames from 'classnames';

import PostActions from '../../actions/PostActions';

import UserStore from '../../stores/UserStore';

class Post extends React.Component{
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
    let params = 'post/' + this.props.data._id
    let snippets = this.props.data.body.split(' ').slice(0, 30).join(' ');
    let votes = this.props.data.votes.reduce((a, voteObj) => voteObj.vote ? a + 1 : a - 1, 0) || 0;

    let userId = this.props.user ? this.props.user._id : false;
    let upColor = this.props.data.votes.some(voteObj => voteObj.user == userId && voteObj.vote);
    let downColor = this.props.data.votes.some(voteObj => voteObj.user == userId && !voteObj.vote);

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
    // let votesWord = classNames({
    //   'noUser': userId
    // })

    let authorDisplayName = this.props.data.author.name;
    let author;
    if(authorDisplayName){
      author = authorDisplayName;
    } else {
      author = this.props.data.author.username;
    }


    return(
      <div className="postComponent row">
        <div className="voteArea col-xs-1">
          <h3>
            <span onClick={this.upVote.bind(this)} className={upArrow} aria-hidden="true"></span>
            <br />
            &nbsp;{votes}
            <br />
            <span onClick={this.downVote.bind(this)} className={downArrow} aria-hidden="true"></span>
          </h3>
        </div>
        <div className="col-xs-11">
          <h1><Link to={params}>{this.props.data.title}</Link></h1>
          <p>{snippets}<Link to={params}>...</Link></p>
          <div>
            <img className="profilePicDisplay" src={this.props.data.author.profilePic}  />
            <span> - <a onClick={this.props.openUserModal.bind(this, this.props.data)} type="button" data-toggle="modal" data-target="#userModal"><em>{author}</em></a></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Post

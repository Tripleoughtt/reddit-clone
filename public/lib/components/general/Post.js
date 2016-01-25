import React from "react";
import {Link} from 'react-router';

class Post extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    let params = 'post/' + this.props.data._id
    let snippets = this.props.data.body.split(' ').slice(0, 30).join(' ');
    let votes = this.props.data.votes || 0;
    return(
      <div className="postComponent row">
        <div className="voteArea col-xs-1">
          <h3>
            <span className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
            <br />
            &nbsp;{votes}
            <br />
            <span className="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>
          </h3>
        </div>
        <div className="col-xs-11">
          <h1><Link to={params}>{this.props.data.title}</Link></h1>
          <p>{snippets}<Link to={params}>...</Link></p>
        </div>
      </div>
    )
  }
}

export default Post

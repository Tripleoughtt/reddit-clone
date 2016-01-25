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
    let authorDisplayName = this.props.data.author.name;
    let author;
    if(authorDisplayName){
      author = authorDisplayName;
    } else {
      author = this.props.data.author.username;
    }
    return(
      <div className="postComponent">
        <h1><Link to={params}>{this.props.data.title}</Link></h1>
        <p>{snippets}<Link to={params}>...</Link></p>
        <p>{author}</p>
      </div>
    )
  }
}

export default Post

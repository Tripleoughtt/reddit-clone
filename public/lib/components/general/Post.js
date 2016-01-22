import React from "react";
import {Link} from 'react-router';

class Post extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    let params = 'post/' + this.props.data._id

    return(
      <div className="postComponent">
        <h1><Link to={params}>{this.props.data.title}</Link></h1>
        <p>{this.props.data.body}</p>
        <p>{this.props.data.tags}</p>
      </div>
    )
  }
}

export default Post

import React from "react";

class Post extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    return(
      <div className="postComponent">
        <h1>{this.props.data.title}</h1>
        <p>{this.props.data.body}</p>
        <p>{this.props.data.tags}</p>
      </div>
    )
  }
}

export default Post

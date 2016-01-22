import React from "react";
import {Link} from 'react-router';

class Comment extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    let comments;
    if (this.props.data.comments){
      comments = this.props.data.comments.map(comment => {
        console.log('inside comment map loop', comment)
        return <Comment data={comment} key={comment._id} />
      });
    }
    return(
      <div className="commentComponent">
        <p>{this.props.data.body}</p>
        <h3>-By {this.props.data.author.username}</h3>
        <div>
          {comments}
        </div>
      </div>
    )
  }
}

export default Comment

import React from "react";
import Post from './Post'

import PostActions from '../../actions/PostActions';
import PostStore from '../../stores/PostStore';


class PostFeed extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    let posts = this.props.posts.map(post => {
      return <Post data={post} key={post._id} />
    })
    return(
      <div className="postFeedComponent">
        {posts}
      </div>
    )
  }
}

export default PostFeed

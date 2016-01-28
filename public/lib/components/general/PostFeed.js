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
    let user = this.props.user;
    let openUserModal = this.props.openUserModal;
    let posts = this.props.posts.map(post => {
      return <Post openUserModal={openUserModal} data={post} user={user} key={post._id} />
    })
    return(
      <div className="postFeedComponent">
        {posts}
      </div>
    )
  }
}

export default PostFeed

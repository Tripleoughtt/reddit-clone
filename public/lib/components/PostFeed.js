import React from "react";
import Post from './Post'

import PostActions from '../actions/PostActions';
import PostStore from '../stores/PostStore';

let _getAppState = () => { posts: PostStore.getAllPosts() }

class PostFeed extends React.Component{
  constructor(props){
    super(props);
    this.state = _getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount(){
    PostActions.getAllPosts();
    PostStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    PostStore.stopListening(this._onChange);
  }

  _onChange() {
    console.log('5');
    this.setState(_getAppState());
  }

  render(){
    // let posts = this.state.posts.map(post => {
    //   return <Post data={postData} id={post._id} />
    // })
    return(
      <div className="col-xs-12 col-sm-9 postFeedComponent">
        <p>postfeed</p>
      </div>
    )
  }
}

export default PostFeed

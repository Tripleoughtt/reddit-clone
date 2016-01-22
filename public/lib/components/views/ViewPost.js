import React from "react";
import {Link, browserHistory} from 'react-router';

import LoggedInNav from '../general/LoggedInNav';
import Comment from '../general/Comment';

import PostActions from '../../actions/PostActions';
import PostStore from '../../stores/PostStore';

let _getComponentState = () => {
  return {
    post: PostStore.getPost()
  }
}

class ViewPost extends React.Component{
  constructor(props){
    super(props);
    this.state = _getComponentState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount(){
    PostActions.getPostInfo(this.props.params.postId);
    PostStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    PostStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState(_getComponentState());
  }


  render(){
    if (!this.state.post){
      return (
        <div></div>
      )
    }
    let comments;
    if (this.state.post.comments){
      comments = this.state.post.comments.map(comment => {
        return <Comment data={comment} key={comment._id} />
      })
    }
    return(
      <div className="viewPostComponent">
        <LoggedInNav />

        <div className="container-fluid text-left postArea">
          <div className="row">
            <div className="col-xs-12 col-sm-offset-1 col-sm-11 viewPostTitle">
              <h1>
                {this.state.post.title}
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-offset-1 col-sm-11 viewPostBody">
              <p>
                {this.state.post.body}
              </p>
            </div>
          </div>
          <div className="row viewTags">
            <div className="col-xs-12 col-sm-offset-1 col-sm-11 border">
              <p>
                {this.state.post.tags}
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid commentsArea">
          <div className="row">
            <div className="col-xs-12 col-sm-offset-2 col-sm-10">
              {comments}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ViewPost

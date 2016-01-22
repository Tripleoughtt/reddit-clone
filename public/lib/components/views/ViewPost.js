import React from "react";
import {Link, browserHistory} from 'react-router';

import LoggedInNav from '../general/LoggedInNav';

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
    return(
      <div className="addPostComponent">
        <LoggedInNav />
        <div className="container-fluid text-center">
          <div className="row addPostTitle">
            <div className="col-xs-12 col-sm-offset-2 col-sm-8 border">
              <h1>
                {this.state.post.title}
              </h1>
            </div>
          </div>
          <div className="row addPostBody">
            <div className="col-xs-12  col-sm-offset-2 col-sm-8 border">
              <p>
                {this.state.post.body}
              </p>
            </div>
          </div>
          <div className="row addPostTags">
            <div className="col-xs-12 col-sm-offset-2 col-sm-8 border">
              <p>
                {this.state.post.tags}
              </p>
            </div>
          </div>



        </div>

      </div>
    )
  }
}

export default ViewPost

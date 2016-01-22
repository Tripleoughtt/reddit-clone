import React from "react";
import {Link, hashHistory} from 'react-router';

import LoggedInNav from '../general/LoggedInNav';

import PostActions from '../../actions/PostActions';
import PostStore from '../../stores/PostStore';

import authorize from '../../authorize';

class AddNewPost extends React.Component{
  constructor(props){
    super(props);
    this.state = {  };
    this._onChange = this._onChange.bind(this);

  }

  componentWillMount(){
    console.log('before mount!',authorize)
    if (!authorize()){
      hashHistory.push('/');
    }
  }

  componentDidMount(){
    // UserActions.getUserInfo();
    PostStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    PostStore.stopListening(this._onChange);
  }

  _onChange() {
    if (PostStore.getNewPost()){
      hashHistory.push('/home');
    }
  }

  updateTitle(e){
    this.setState({title: e.target.value})
  }
  updateBody(e){
    this.setState({body: e.target.value})
  }
  updateTags(e){
    this.setState({tags: e.target.value})
  }

  submitNewPost(){
    PostActions.createNewPost(this.state);

  }

  render(){
    return(
      <div className="addPostComponent">
        <LoggedInNav />
        <div className="container-fluid text-center">
          <div className="row addPostTitle">
            <div className="col-xs-12 col-sm-offset-2 col-sm-8 border">
              <input onChange={this.updateTitle.bind(this)} type="text" placeholder="Title" />
            </div>
          </div>
          <div className="row addPostBody">
            <div className="col-xs-12  col-sm-offset-2 col-sm-8 border">
              <textarea onChange={this.updateBody.bind(this)} placeholder="Insert Post Text Here" rows="5" />
            </div>
          </div>
          <div className="row addPostTags">
            <div className="col-xs-12 col-sm-offset-2 col-sm-8 border">
              <input onChange={this.updateTags.bind(this)} type="text" placeholder="E.g. Code Challenges, Costs, Getting A Job" />
            </div>
          </div>
          <div className="row addPostButtons">
            <div className="col-xs-6 col-sm-offset-2 col-sm-4 border">
              <Link to="home" className="btn btn-danger btn-lg">
                Cancel
              </Link>
            </div>
            <div className="col-xs-6 col-sm-4 border">
              <button onClick={this.submitNewPost.bind(this)} className="btn btn-primary btn-lg">Submit</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default AddNewPost

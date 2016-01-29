import React from "react";
import {Link, hashHistory} from 'react-router';

import LoggedInNav from '../general/LoggedInNav';

import PostActions from '../../actions/PostActions';
import PostStore from '../../stores/PostStore';

import {get} from 'jquery';
import SweetAlert from 'sweetalert';

class AddNewPost extends React.Component{
  constructor(props){
    super(props);
    this.state = {  };
    this._onChange = this._onChange.bind(this);

  }

  componentWillMount(){
    (function authorize(){
      get('/users/authorize').then((res) => {
        if (res === "Error with authentication, please try again!"){
          hashHistory.push('/');
        }
        return true
      }, (err) => {
        hashHistory.push('/');
      })
    })()
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
      hashHistory.push('/');
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
    let newPost = this.state;
    if(!this.state.body || !this.state.title) {
      return swal('Sorry!', 'Please Enter a title and a body for your post!', 'error');
    }
    if (newPost.tags.length){
      newPost.tags = newPost.tags.replace(/,\s?/g, ' ').split(' ');
    }
    PostActions.createNewPost(newPost);
  }

  render(){
    return(
      <div>
        <div className="container-fluid text-center addPostComponent">
          <div className="row addPostTitle">
            <h1>What do you want to talk about?</h1>
            <h4>Complete the fields below, then click "Submit" to make a new discussion topic</h4>
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

import React from "react";

import PostActions from '../actions/PostActions';
import PostStore from '../stores/PostStore';
import NavBarUser from './NavBarUser';

class AddPostPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    return(
      <div className="addPostComponent">
        <NavBarUser />
        <div className="container-fluid text-center">
          <div className="row addPostTitle">
            <div className="col-xs-12 col-sm-offset-2 col-sm-8 border">
              <div class="wrapper">
                <input type="text" placeholder="Title" />
              </div>
            </div>
          </div>
          <div className="row addPostBody">
            <div className="col-xs-12  col-sm-offset-2 col-sm-8 border">
              <div class="wrapper">
                <textarea  placeholder="Insert Post Text Here" rows="5" />
              </div>
            </div>
          </div>
          <div className="row addPostTags">
            <div className="col-xs-12 col-sm-offset-2 col-sm-8 border">
              Tagz
            </div>
          </div>
          <div className="row addPostButtons">
            <div className="col-xs-6 col-sm-offset-2 col-sm-4 border">
              Cancel
            </div>
            <div className="col-xs-6 col-sm-4 border">
              Submit
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default AddPostPage

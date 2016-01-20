import React from "react";
import {Link} from 'react-router';

import NavBarUser from "../components/NavBarUser";
import PostFeed from "../components/PostFeed";

class UserHome extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    return(
      <div className="UserHomeComponent">
        <NavBarUser />
        <PostFeed />
        <Link to="addpost" className="btn btn-primary btn-lg">Add A New Post</Link>
      </div>
    )
  }
}

export default UserHome

import React from "react";
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
      </div>
    )
  }
}

export default UserHome

import React from "react";
import {Link} from 'react-router';
import NavBarDefault from "../components/NavBarDefault";
import SignUpForm from "../components/SignUpForm";
import PostFeed from "../components/PostFeed";

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    return(
      <div className="homeComponent">
        <NavBarDefault />
        <SignUpForm />
        <PostFeed />
        <button><Link to={`home`}>Home</Link></button>
      </div>
    )
  }
}

export default Home

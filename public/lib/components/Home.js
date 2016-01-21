import React from "react";
import {Link, browserHistory} from 'react-router';
import NavBarDefault from "../components/NavBarDefault";
import SignUpForm from "../components/SignUpForm";
import PostFeed from "../components/PostFeed";

import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';

let _getUserInfo = () => {
  return { user: UserStore.getUserInfo() }
}

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = { };
  }

  componentDidMount(){
    // UserActions.getUserInfo();
    UserStore.startListening(this._onChange.bind(this));
  }

  componentWillUnmount(){
    UserStore.stopListening(this._onChange.bind(this));
  }

  _onChange() {
    this.setState(_getUserInfo());
    browserHistory.push('/home');
  }

  render(){
    console.log(this.state);
    return(
      <div className="homeComponent">
        <NavBarDefault />
        <SignUpForm />

        <Link to={`home`}>Home</Link>
      </div>
    )
  }
}

export default Home

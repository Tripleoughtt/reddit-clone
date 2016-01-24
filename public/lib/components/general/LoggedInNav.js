import React from "react";
import {Link, hashHistory} from "react-router";

import authorize from '../../authorize';

class LoggedInNav extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }

  logout(){
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    window.location = '/';
  }


  //componentDidMount(){
  //  authorize();
  //}

  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img src="lib/logo.png" />
              <p className="logoImage"> DCF</p>
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="home">Home</Link></li>
              <li><Link to="profile">Profile</Link></li>
              <li><button onClick={this.logout.bind(this)}>Logout</button></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default LoggedInNav;

import React from "react";
import {Link, hashHistory} from "react-router";

import authorize from '../../authorize';

class LoggedInNav extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
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
            <a className="navbar-brand" href="#">Logo</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><Link to="home">Home<span className="sr-only">(current)</span></Link></li>
              <li><Link to="profile">Profile</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default LoggedInNav;

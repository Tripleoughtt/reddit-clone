import React from "react";
import {Link, browserHistory} from 'react-router';

class AppController extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }

  render(){
    return(
      <div className="app">
        {this.props.children}
      </div>
    )
  }
}

export default AppController

import React from "react";
import {Link, browserHistory} from 'react-router';

class PostWrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default PostWrapper

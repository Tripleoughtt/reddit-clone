import React from "react";
import Post from './Post'

import PostActions from '../../actions/PostActions';
import PostStore from '../../stores/PostStore';


class Tag extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    let name = this.props.name;
    return(
      <button className="btn btn-default tag" onClick={this.props.filterByTag.bind(this, name)}>
        {name} <span className="badge">{this.props.number}</span>
      </button>
    )
  }
}

export default Tag

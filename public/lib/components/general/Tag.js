import React from "react";
import Post from './Post'

import PostActions from '../../actions/PostActions';
import PostStore from '../../stores/PostStore';

import classNames from 'classnames';

class Tag extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    let name = this.props.name;
    let buttonClass = classNames('btn btn-default tag', {
      'filteringByTag': this.props.currentlyFilteringTags ? this.props.currentlyFilteringTags.some(tag => tag === name) : false
    });
    //should be a link to all posts with that tag
    let filterByTag = this.props.filterByTag ? this.props.filterByTag.bind(this, name) : undefined

    return(
      <button className={buttonClass} onClick={filterByTag}>
        {name} <span className="badge">{this.props.number}</span>
      </button>
    )
  }
}

export default Tag

import React from "react";
import Post from './Post'

import PostActions from '../../actions/PostActions';
import PostStore from '../../stores/PostStore';

import Tag from "./Tag";


class TagCloud extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    console.log(this.props.posts);
    let tags;
    if (this.props.posts.length){
      // create a tags dictionary to get totals for tag badge number
      let tagsDictionary = this.props.posts.reduce((a, post) => {
        // post.tags is an array of tags for that post
        // a is the current state of the dictionary
        post.tags.forEach(tag => {
          a[tag] = a[tag] ? a[tag] + 1 : 1;
        });
        return a;
      }, {});

      // create the Tag components array with the name and
      // total count of each tag in ascending order
      tags = Object.keys(tagsDictionary).map((tag, i) => {
        return <Tag key={i} name={tag} number={tagsDictionary[tag]} filterByTag={this.props.filterByTag} />
      }).sort((firstTag, secondTag) =>{
        return secondTag.props.number - firstTag.props.number;
      });
    }
    console.log('tags', tags)
    return(
      <div className="tagCloud">
        {tags}
      </div>
    )
  }
}

export default TagCloud

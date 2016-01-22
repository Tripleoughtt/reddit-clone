import React from "react";
import {Link} from 'react-router';

import LoggedInNav from "../general/LoggedInNav";


class UserProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  editDisplayName(e){
    if (this.state.editing){
      var $currentName = $(e.target).closest('tr').find('td:nth-child(2)');
      var $editIcon = $(e.target).closest('tr').find('td:nth-child(3)');
      var currentNameText = $currentName.find('input').val();
      $currentName.empty();
      $editIcon.empty();
      $currentName.text(currentNameText);
      $editIcon.append($(`<i class="fa fa-pencil-square-o"></i>`))
      this.setState({editing: false})
    } else {
      var $currentName = $(e.target).closest('tr').find('td:nth-child(2)');
      var $editIcon = $(e.target).closest('tr').find('td:nth-child(3)');
      var currentNameText = $currentName.text();
      $currentName.empty();
      $editIcon.empty();
      $currentName.append($(`<input type="text" value="${currentNameText}" />`));
      $editIcon.append($(`<i class="fa fa-check"></i>`))
      this.setState({editing: true});
    }
  }

  render(){
    // example API call to users/:id/posts
    let exampleCall =
    [
      {
        "_id": "56a1ae5ea4faed201adfea98",
        "title": "Robbie's post",
        "body": "Robbie was here",
        "author": "56a1ae04a4faed201adfea97",
        "__v": 0,
        "totalComments": 6,
        "comments": [
          {
            "_id": "56a1b76c52bfbce11d8051c0",
            "author": "56a1ae27a4faed201adfea95",
            "body": "This is Rich",
            "__v": 0,
            "comments": [
              "56a1b8d4462059891e2b15dd"
            ]
          },
          {
            "_id": "56a1c4a61744c53222828183",
            "author": "56a1ae27a4faed201adfea95",
            "body": "This isn't Rich, sorry",
            "__v": 0,
            "comments": [
              "56a1c4b61744c53222828184"
            ]
          }
        ],
        "tags": [
          "Robbie"
        ]
      }
    ]


    let links = exampleCall.map(post => {
      let params = 'post/' + post._id
      return (
        <li key={post._id}>
          <Link to={params}>{post.title}</Link> - {post.totalComments} comments
        </li>
      )
    })

    return(
      <div className="userProfileComponent">
        <LoggedInNav />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-6 text-center">
              <img className="img img-responsive" src="https://placehold.it/350x350" />
            </div>
            <div className="col-xs-12 col-sm-6">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Username:</td>
                    <td>myusername</td>
                  </tr>
                  <tr>
                    <td>Display Name:</td>
                    <td>My Name</td>
                    <td onClick={this.editDisplayName.bind(this)}><i className="fa fa-pencil-square-o"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <h1>My Posts</h1>
              <ul>
                {links}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile

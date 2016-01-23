import React from "react";
import {Link, hashHistory} from 'react-router';

import LoggedInNav from "../general/LoggedInNav";

import UserStore from '../../stores/UserStore';
import UserActions from '../../actions/UserActions';

import {get} from 'jquery';


class UserProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      user: UserStore.getUserProfile(),
      posts: UserStore.getUserPosts()
    };
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount(){
    (function authorize(){
      get('/users/authorize').then((res) => {
        if (res === "Error with authentication, please try again!"){
          hashHistory.push('/');
        }
        return true
      }, (err) => {
        console.log(err)
        hashHistory.push('/');
      })
    })()
  }

  componentDidMount(){
    UserActions.fetchUserInfo();
    UserActions.fetchUserPosts();
    UserStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    UserStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      user: UserStore.getUserProfile(),
      posts: UserStore.getUserPosts()
    });
  }

  uploadFile(e){
    console.log('file', e.target.files);
    var file = e.target.files[0];

    if (file) {
        var reader = new FileReader();
        console.log('inside', reader);
        reader.onload = function(readerEvt) {
            var binaryString = readerEvt.target.result;
            // send image to db
            UserActions.updateUserInfo({profilePic: `data:image/jpeg;base64,${btoa(binaryString)}`})

            // update image after success
            $('.img').attr('src', `data:image/jpeg;base64,${btoa(binaryString)}`);
        };
        reader.readAsBinaryString(file);
    }
  }

  editDisplayName(e){
    if (this.state.editing){
      var $currentName = $(e.target).closest('tr').find('td:nth-child(2)');
      var $editIcon = $(e.target).closest('tr').find('td:nth-child(3)');
      var currentNameText = $currentName.find('input').val();
      // send new display name info to db
      UserActions.updateUserInfo({name: currentNameText})

      // update after success
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
    let username = this.state.user ? this.state.user.username : 'username';
    let name;
    let profilePic;
    if (this.state.user){
      name = this.state.user.name ? this.state.user.name : "DevCamp Fire";
      profilePic = this.state.user.profilePic ? this.state.user.profilePic : "https://placehold.it/350x350";
    }

    let links;
    if (this.state.posts){
      links = this.state.posts.map(post => {
        let params = 'post/' + post._id
        let comments = `${post.totalComments} ${post.totalComments === 1 ? "comment" : "comments"}`
        return (
          <li key={post._id}>
            <Link to={params}>{post.title}</Link> - {comments}
          </li>
        )
      })
    }

    return(
      <div>
        <LoggedInNav />
        <div className="container-fluid userProfileComponent">
          <div className="row">
            <div className="col-xs-12 col-sm-6 text-center">
              <div className="profileImageWrapper">
                <img className="img img-responsive profileImage" src={profilePic} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Username:</td>
                    <td>{username}</td>
                  </tr>
                  <tr>
                    <td>Display Name:</td>
                    <td>{name}</td>
                    <td onClick={this.editDisplayName.bind(this)}><i className="fa fa-pencil-square-o"></i></td>
                  </tr>
                </tbody>
              </table>
              <form>
                <label htmlFor="profileImage">Change Profile Picture</label>
                <input type="file" name="profileImage" accept=".png, .gif, .jpg" placeholder="Upload A New Profile Image" onChange={this.uploadFile.bind(this)} />
              </form>
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

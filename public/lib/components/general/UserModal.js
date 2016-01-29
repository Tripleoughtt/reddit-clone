import React from "react";

import classNames from 'classnames';

class UserModal extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){

    let name;
    let profilePic;
    if (this.props.userInfo){
      name = this.props.userInfo.name ? this.props.userInfo.name : this.props.userInfo.username;
      profilePic = this.props.userInfo.profilePic;
    }


    return(
      <div id="userModal" className="modal fade" tabIndex="-1" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-xs-12 col-sm-6 text-center">
                  <div className="profileImageWrapper">
                    <img className="img img-responsive profileImage" src={profilePic} />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <h3>{name}</h3>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Send A Message!</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserModal

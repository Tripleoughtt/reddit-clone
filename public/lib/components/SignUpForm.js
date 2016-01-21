import React from "react";

import UserActions from '../actions/UserActions';

class SignUpForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }

  updateUsername(e){
    this.setState({username: e.target.value})
  }
  updatePassword1(e){
    this.setState({password1: e.target.value})
  }
  updatePassword2(e){
    this.setState({password2: e.target.value})
  }

  submitNewUser(e){
    e.preventDefault();
    console.log(this.state);
    if (this.state.password1 === this.state.password2){
      UserActions.createNewUser(this.state);
    }
  }

  render(){
    return(
      <div className="hidden-xs col-sm-3 signUpFormComponent">
        <form>
          <div className="form-group">
            <label htmlFor="username">Choose a username</label>
            <input onChange={this.updateUsername.bind(this)} type="text" className="form-control" id="username" placeholder="username" />
          </div>
          <div className="form-group">
            <label htmlFor="pass1">Password</label>
            <input onChange={this.updatePassword1.bind(this)} type="password" className="form-control" id="pass1" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="pass2">Confirm Password</label>
            <input onChange={this.updatePassword2.bind(this)} type="password" className="form-control" id="pass2" placeholder="Re-enter password" />
          </div>
          <button onClick={this.submitNewUser.bind(this)} type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}

export default SignUpForm

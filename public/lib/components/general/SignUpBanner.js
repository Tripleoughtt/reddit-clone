import React from "react";

class SignUpBanner extends React.Component{
  constructor(props){
    super(props);
    this.state = { }
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

  render(){
    return(
      <div className="signUpBanner text-left">
        <form className="form">
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
          <div className="form-group">
            <button onClick={this.props.signUp.bind(this, this.state)} type="submit" className="btn btn-default">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUpBanner

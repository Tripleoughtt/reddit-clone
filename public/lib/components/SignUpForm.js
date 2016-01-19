import React from "react";

class SignUpForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    return(
      <div className="hidden-xs col-sm-3 signUpFormComponent">
        <form>
          <div className="form-group">
            <label htmlFor="username">Choose a username</label>
            <input type="text" className="form-control" id="username" placeholder="username" />
          </div>
          <div className="form-group">
            <label htmlFor="pass1">Password</label>
            <input type="password" className="form-control" id="pass1" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="pass2">Confirm Password</label>
            <input type="password" className="form-control" id="pass2" placeholder="Re-enter password" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}

export default SignUpForm

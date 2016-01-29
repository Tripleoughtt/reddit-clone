import React from 'react';

import LoggedInNav from './LoggedInNav';
import NotLoggedInNav from './NotLoggedInNav';

class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = { };
  }

  render(){
    console.log('navbar', this.props.user);

    let navbar = this.props.user ? <LoggedInNav /> : <NotLoggedInNav signUp={this.props.signUp} login={this.props.login} />

    return(
      <div>
        {navbar}
      </div>
    )
  }
}

export default NavBar

import API from '../API';

let UserActions = {
  createNewUser(newUser) {
    API.createNewUser(newUser);
  },

  loginUser(user) {
    API.loginUser(user);
  }

}

export default UserActions;

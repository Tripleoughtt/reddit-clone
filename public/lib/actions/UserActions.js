import API from '../API';

let UserActions = {
  createNewUser(newUser) {
    API.createNewUser(newUser);
  }
}

export default UserActions;

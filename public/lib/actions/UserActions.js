import API from '../API';

let UserActions = {
  createNewUser(newUser) {
    API.createNewUser(newUser);
  },

  loginUser(user) {
    API.loginUser(user);
  },

  fetchUserInfo(){
    API.fetchUserInfo();
  },
  fetchUserPosts(){
    API.fetchUserPosts();
  },

  updateUserInfo(info){
    API.updateUserInfo(info);
  }

}

export default UserActions;

import {get, post} from 'jquery';

import ServerActions from './actions/ServerActions';

let API = {
  fetchAllPosts() {
    get('/posts').done(data => ServerActions.receivePosts(data));
  },
  createNewPost(postInfo) {
    post('/posts', postInfo).done(data => ServerActions.receiveNewPost(data));
  },

  createNewUser(newUser) {
    post('/users/register', newUser).done(data => {
      ServerActions.receiveNewUser(data)
    });
  },
  loginUser(user) {
    post('/users/login', user).done(data => {
      console.log('in api', data);
      ServerActions.receiveNewUser(data)
    });
  }
}

export default API;

import AppDispatcher from '../AppDispatcher';

let ServerActions = {
  receivePosts(posts) {
    console.log('3 - server action: receive posts');
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_POSTS',
      posts
    });
  },
  receiveNewUser(user) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_NEW_USER',
      user
    });
  }
}

export default ServerActions;

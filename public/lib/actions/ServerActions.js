import AppDispatcher from '../AppDispatcher';

let ServerActions = {
  receivePosts(posts) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_POSTS',
      posts
    });
  },
  receiveNewPost(post) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_ONE_POST',
      post
    });
  },
  receivePost(post) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_POST',
      post
    });
  },
  receiveNewUser(user) {
    ;
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_NEW_USER',
      user
    });
  }
}

export default ServerActions;

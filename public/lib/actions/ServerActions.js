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
  receiveNewUser(user) {
    console.log('server actions', user);
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_NEW_USER',
      user
    });
  }
}

export default ServerActions;

import AppDispatcher from '../AppDispatcher';

let ServerActions = {
  receivePosts(posts) {
    console.log('3 - server action: receive posts');
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
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_NEW_USER',
      user
    });
  }
}

export default ServerActions;

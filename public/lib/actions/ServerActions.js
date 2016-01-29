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
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_NEW_USER',
      user
    });
  },
  receiveUserInfo(user) {

    AppDispatcher.dispatch({
      actionType: 'RECEIVE_USER_INFO',
      user
    });
  },
  receiveUserPosts(posts) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_USER_POSTS',
      posts
    });
  },
  receiveLoginError(err){
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_LOGIN_ERROR',
      err
    });
  },
  receiveError(error){
    AppDispatcher.dispatch({
      actionType: 'ERROR',
      error
    });
  }


}

export default ServerActions;

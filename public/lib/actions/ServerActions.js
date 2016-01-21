import AppDispatcher from '../AppDispatcher';

let ServerActions = {
  receivePosts(posts) {
    console.log('3 - server action: receive posts');
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_POSTS',
      posts
    });
  }
}

export default ServerActions;

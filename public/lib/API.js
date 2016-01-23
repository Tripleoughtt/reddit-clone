import {get, post} from 'jquery';

import ServerActions from './actions/ServerActions';

let API = {
  fetchAllPosts() {
    get('/posts').done(data => ServerActions.receivePosts(data));
  },
  createNewPost(postInfo) {
    post('/posts', postInfo).done(data => ServerActions.receiveNewPost(data));
  },
  getPostInfo(postId){
    get(`/posts/${postId}`).done(data => ServerActions.receivePost(data));
  },

  createNewUser(newUser) {
    post('/users/register', newUser).done(data => {
      ServerActions.receiveNewUser(data)
    });
  },
  loginUser(user) {
    post('/users/login', user).done(data => {
      ServerActions.receiveNewUser(data)
    });
  },
  createNewCommentOnPost(commentData){
    post(`/posts/${commentData.postId}/newcomment`, {body: commentData.body}).done(data => {
      ServerActions.receivePost(data);
    });
  },
  createNewCommentOnComment(commentData){
    let data = {postId: commentData.postId, body: commentData.body};
    post(`/comments/${commentData.commentId}/newcomment`, data).done(data => {
      ServerActions.receivePost(data);
    })
  }
}

export default API;

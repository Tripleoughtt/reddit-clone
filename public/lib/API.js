import {get, post, ajax} from 'jquery';

import ServerActions from './actions/ServerActions';

let API = {
  fetchAllPosts() {
    get('/posts')
    .done(data => ServerActions.receivePosts(data))
    // .fail(err => ServerActions.receiveError(err));
  },
  createNewPost(postInfo) {
    post('/posts', postInfo)
    .done(data => ServerActions.receiveNewPost(data))
    // .fail(err => ServerActions.receiveError(err));
  },
  getPostInfo(postId){
    get(`/posts/${postId}`)
    .done(data => ServerActions.receivePost(data))
    // .fail(err => ServerActions.receiveError(err));
  },
  updatePostInfo(update, postId) {
    post(`posts/${postId}`, update)
    .done(data => ServerActions.receivePost(data))
    // .fail(err => ServerActions.receiveError(err));
  },

  voteOnPost(postId, direction){
    post(`posts/vote/${postId}`, {direction: direction})
    .done(data => ServerActions.receivePosts(data))
    // .fail(err => ServerActions.receiveError(err));
  },
  voteOnComment(commentId, direction, postId){
    post(`comments/vote/${commentId}`, {direction: direction, postId: postId})
    .done(data => ServerActions.receivePost(data))
    // .fail(err => ServerActions.receiveError(err));
  },

  createNewUser(newUser) {
    post('/users/register', newUser)
    .done(data => ServerActions.receiveNewUser(data))
    .fail(err => ServerActions.receiveError(err));
  },
  loginUser(user) {
    post('/users/login', user)
    .done(data => ServerActions.receiveNewUser(data))
    .fail(err => ServerActions.receiveError(err));
  },

  fetchUserInfo(){
    get('/users/myinfo')
    .done(data => ServerActions.receiveUserInfo(data))
    // .fail(err => ServerActions.receiveError(err));
  },
  fetchUserPosts(){
    get('/users/myposts')
    .done(data => ServerActions.receiveUserPosts(data))
    // .fail(err => ServerActions.receiveError(err));
  },

  updateUserInfo(info){
    post('/users/edit', info)
    .then(data => ServerActions.receiveUserInfo(data))
    // .fail(err => ServerActions.receiveError(err));
  },


  createNewCommentOnPost(commentData){
    post(`/posts/${commentData.postId}/newcomment`, {body: commentData.body})
    .done(data => ServerActions.receivePost(data))
    // .fail(err => ServerActions.receiveError(err));
  },
  createNewCommentOnComment(commentData){
    let data = {postId: commentData.postId, body: commentData.body};
    post(`/comments/${commentData.commentId}/newcomment`, data)
    .done(data => ServerActions.receivePost(data))
    // .fail(err => ServerActions.receiveError(err));
  }
}

export default API;

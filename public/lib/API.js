import {get, post, ajax} from 'jquery';

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
  updatePostInfo(update, postId) {
    post(`posts/${postId}`, update).done(data => ServerActions.receivePost(data));
  },

  voteOnPost(postId, direction){
    post(`posts/vote/${postId}`, {direction: direction}).done(data => ServerActions.receivePosts(data));
  },
  voteOnComment(commentId, direction, postId){
    post(`comments/vote/${commentId}`, {direction: direction, postId: postId}).done(data => ServerActions.receivePost(data));

  },

  createNewUser(newUser) {
    post('/users/register', newUser).done(data => {
      ServerActions.receiveNewUser(data)
    }).fail(err => {
      ServerActions.receiveLoginError(err);
    })
  },
  loginUser(user) {
    post('/users/login', user).done(data => {
      ServerActions.receiveNewUser(data)
    }).fail(err => {

      ServerActions.receiveLoginError(err);
    })
  },

  fetchUserInfo(){
    get('/users/myinfo').done(data => {
      ServerActions.receiveUserInfo(data)
    });
  },
  fetchUserPosts(){
    get('/users/myposts').done(data => {
      ServerActions.receiveUserPosts(data)
    });
  },

  updateUserInfo(info){
    post('/users/edit', info).then(data => {
      ServerActions.receiveUserInfo(data)
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

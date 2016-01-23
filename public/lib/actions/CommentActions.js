import API from '../API';

let CommentActions = {
  createNewCommentOnPost(data){
    API.createNewCommentOnPost(data) 
  },
  createNewCommentOnComment(data){
    API.createNewCommentOnComment(data);
  }
}


export default CommentActions;

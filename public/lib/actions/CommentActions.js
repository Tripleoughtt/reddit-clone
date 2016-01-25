import API from '../API';

let CommentActions = {
  createNewCommentOnPost(data){
    API.createNewCommentOnPost(data) 
  },
  createNewCommentOnComment(data){
    API.createNewCommentOnComment(data);
  },
  upVote(commentId, postId){
    API.voteOnComment(commentId, 'up', postId);
  },
  downVote(commentId, postId){
    API.voteOnComment(commentId, 'down', postId);
  }
}


export default CommentActions;

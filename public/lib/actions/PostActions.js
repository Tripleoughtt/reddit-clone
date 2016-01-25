import API from '../API';

let PostActions = {
  getAllPosts() {
    API.fetchAllPosts();
  },
  createNewPost(post) {
    API.createNewPost(post);
  },
  getPostInfo(postId){
    API.getPostInfo(postId);
  },
  updatePost(edit, id) {
    API.updatePostInfo(edit , id);
  },

  upVote(postId){
    API.vote(postId, 'up');
  },
  downVote(postId){
    API.vote(postId, 'down');
  }
}

export default PostActions;

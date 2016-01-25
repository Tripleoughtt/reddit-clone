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
  }
}

export default PostActions;

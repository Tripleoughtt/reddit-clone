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
  }
}

export default PostActions;

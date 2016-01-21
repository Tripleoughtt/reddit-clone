import API from '../API';

let PostActions = {
  getAllPosts() {
    console.log('1 - post action: get all posts')
    API.fetchAllPosts();
  },
  createNewPost(post) {
    API.createNewPost(post);
  }
}

export default PostActions;

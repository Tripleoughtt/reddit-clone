import API from '../API';

let PostActions = {
  getAllPost() {
    console.log('1 - post action: get all posts')
    API.fetchAllPosts();
  }
}

export default PostActions;

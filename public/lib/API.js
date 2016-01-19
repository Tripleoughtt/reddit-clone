import {get, post} from 'jquery';

import ServerActions from './actions/ServerActions';

let API = {
  fetchAllPosts() {
    console.log('2 - in API: fetch all posts');
    get('/posts').done(data => ServerActions.receivePosts(data.posts));
  }
}

export default API;

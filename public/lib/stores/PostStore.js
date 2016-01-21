import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';

let _posts = [];
let _newPost;

class PostStore extends EventEmitter {
  constructor(props){
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case 'RECEIVE_POSTS':
          console.log('4 - store received posts, action:', action);
          _posts = action.posts;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_ONE_POST':
          _posts.push(action.post);
          _newPost = action.post;
          this.emit('CHANGE');
          break;
      }
    });
  }

  getAllPosts() {
    console.log('in getAllPosts', _posts)
    return _posts;
  }

  getNewPost() {
    return _newPost;
  }

  startListening(cb){
    this.on('CHANGE', cb);
  }

  stopListening(cb){
    this.removeListener('CHANGE', cb);
  }
}

export default new PostStore();

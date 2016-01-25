import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';

let _posts = [];
let _newPost;
let _post;

class PostStore extends EventEmitter {
  constructor(props){
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case 'RECEIVE_POSTS':
          _posts = action.posts;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_ONE_POST':
          _posts.push(action.post);
          _newPost = action.post;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_POST':
          _post = action.post;
          this.emit('CHANGE');
          break;
      }
    });
  }

  getAllPosts() {
    return _posts;
  }

  getNewPost() {
    return _newPost;
  }

  getPost() {
    return _post;
  }

  startListening(cb){
    this.on('CHANGE', cb);
  }

  stopListening(cb){
    this.removeListener('CHANGE', cb);
  }
}

export default new PostStore();

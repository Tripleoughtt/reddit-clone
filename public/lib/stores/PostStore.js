import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';

let _posts = [];

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
      }
    });
  }

  getAllPosts() {
    return _posts;
  }

  startListening(cb){
    this.on('CHANGE', cb);
  }

  stopListening(cb){
    this.removeListener('CHANGE', cb);
  }
}

export default new PostStore();

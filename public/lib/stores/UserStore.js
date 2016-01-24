import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';

let _user;
let _myInfo;
let _myPosts;
let _loginErr;

class UserStore extends EventEmitter {
  constructor(props){
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case 'RECEIVE_NEW_USER':

          _user = action.user;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_USER_INFO':
          _myInfo = action.user;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_USER_POSTS':
          _myPosts = action.posts;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_LOGIN_ERROR':
          _loginErr = action.err;
          this.emit('CHANGE');
          break;
      }
    });
  }

  getUserInfo() {
    return _user;
  }

  getUserPosts() {
    return _myPosts;
  }

  getUserProfile() {
    return _myInfo;
  }

  getLoginError() {
    return _loginErr;
  }

  startListening(cb){
    this.on('CHANGE', cb);
  }

  stopListening(cb){
    this.removeListener('CHANGE', cb);
  }
}

export default new UserStore();

import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';

let _user;

class UserStore extends EventEmitter {
  constructor(props){
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case 'RECEIVE_NEW_USER':
          _user = action.user;
          this.emit('USER_CHANGE');
          break;
      }
    });
  }

  getUserInfo() {
    return _user;
  }

  startListening(cb){
    this.on('USER_CHANGE', cb);
  }

  stopListening(cb){
    this.removeListener('USER_CHANGE', cb);
  }
}

export default new UserStore();

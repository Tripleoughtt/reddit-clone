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
          this.emit('CHANGE');
          break;
      }
    });
  }

  getUserInfo() {
    return _user;
  }

  startListening(cb){
    this.on('CHANGE', cb);
  }

  stopListening(cb){
    this.removeListener('CHANGE', cb);
  }
}

export default new UserStore();

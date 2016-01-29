import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';

let _error;

class ErrorStore extends EventEmitter {
  constructor(props){
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case 'ERROR':
          _error = action.error;
          this.emit('ERROR');
          break;
      }
    });
  }

  getError(){
    return _error;
  }

  startListening(cb){
    this.on('ERROR', cb);
  }

  stopListening(cb){
    this.removeListener('ERROR', cb);
  }
}

export default new ErrorStore();

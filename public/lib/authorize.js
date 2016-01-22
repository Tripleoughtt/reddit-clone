import {get} from 'jquery';
import {hashHistory} from 'react-router';


const authorize = () => {
  get('/users/authorize').then((res) => {
    if (res === "Error with authentication, please try again!"){
      return false
    }
    return true
  }, (err) => {
    console.log(err)
    return false

  })
}

export default authorize;

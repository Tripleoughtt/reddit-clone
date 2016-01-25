import {get} from 'jquery';
import {hashHistory} from 'react-router';

// async function authorize(){
//   return (await function() {
//     return get('/users/authorize').then((res) => {
//       if (res === "Error with authentication, please try again!"){
//         return false
//       }
//       return true
//     }, (err) => {
//       
//       return false
//
//     })
//   })()
//
// }

function authorize(){
  var promise = new Promise(function(resolve, reject){
    get('/users/authorize').then((res) => {
      if (res === "Error with authentication, please try again!"){
        return false
      }
      return true
    }, (err) => {
      
      return false
    })
  })

}

export default authorize;

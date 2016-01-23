// Import For Password Setup
import jwt from 'jwt-simple';
import moment from 'moment';

// Constants For For User Setup
import CONFIG from './authConfig';

// Import User To Interact With Mongo
import User from '../models/User';

let tokenParts = function(token, res) {
  try {
    return jwt.decode(token, process.env.JWT_SECRET);
  } catch(err) {
    return res.status(401).send('Authorization Required');
  }
}

export function authenticate(req, res, next){
  let token = req.cookies.token;
  let decoded = tokenParts(token, res);

  if(!token || decoded.exp < moment().unix()) {
    return res.status(401).send('authorization required');
  }

  req.decodedToken = decoded;
  next();
}

export function passChange(req, res, next){
  if(req.body.newPassword) {
    User.hashNewPassword(req, (err, hashedPassword) => {
      if(!hashedPassword || err) return res.status(400).send(err);
      req.body.password = hashedPassword;
      delete req.body.newPassword;
      delete req.body.username;
      next();
    });
  } else {
    next();
  }
}

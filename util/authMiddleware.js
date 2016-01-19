import jwt from 'jwt-simple';
import moment from 'moment';
import CONFIG from './authConfig';
import User from '../models/User';

export function authenticate(req, res, next){
  let token = req.cookies.token;

  if(!token) {
    return res.status(401).send('authorization required');
  }

  try {
    var decoded = jwt.decode(token, process.env.JWT_SECRET);
  } catch(e) {
    return res.status(401).send('authorization required');
  }

  if (decoded.exp < moment().unix()) {
    return res.status(401).send('authorization expired');
  }

  req.decodedToken = decoded;
  next();
}

export function passChange(req, res, next){
  if(req.body.newPassword){
    User.hashNewPassword(req, (err, hashedPassword) => {
      if(!hashedPassword || err){
        return res.status(400).send(err);
      }
      req.body.password = hashedPassword;
      delete req.body.newPassword;
      delete req.body.username;
      next();
    });
  } else {
    next();
  }
}

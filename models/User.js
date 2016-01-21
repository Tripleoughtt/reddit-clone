import mongoose from 'mongoose';
import jwt from 'jwt-simple';
import bcrypt from 'bcryptjs';
import moment from 'moment';
import CONFIG from "../util/authConfig";

let Schema = mongoose.Schema;
let User;

let userSchema = mongoose.Schema({
  email: {type: String},
  password: {type: String},
  username: {type: String, unique: true}
});

userSchema.methods.token = function() {
  let payload = {
    id: this._id,
    iat: moment().unix(),
    exp: moment().add(CONFIG.expTime.num, CONFIG.expTime.unit).unix()
  };
  return jwt.encode(payload, process.env.JWT_SECRET);
};

userSchema.statics.login = function(userInfo, cb) {
  // look for user in database
  User.findOne({ username: userInfo.username }, (err, foundUser) => {
    if(err) return cb('server error');
    if(!foundUser) return cb('incorrect email or password');
    bcrypt.compare(userInfo.password, foundUser.password, (err, isGood) => {
      if(err) return cb('server err');
      if(isGood) {
        foundUser.password = null;
        return cb(null, foundUser.token());
      } else {
        return cb('incorrect email or password');
      }
    });
  });
}

userSchema.statics.hashNewPassword = (userInfo, cb) => {
  User.findById(userInfo.params.id, (err, user) => {
    console.log('finding user', err, user);
    if (err) return cb(err);

    bcrypt.genSalt(CONFIG.saltRounds, (err, salt) => {
      console.log('salt gen', salt);
      if (err) return cb(err);
      bcrypt.hash(userInfo.body.password, salt, (err, userInputHashedPassword) => {
        console.log('hash old pass', err, userInputHashedPassword);
        if (err) return cb(err);
        console.log(user);
        if (user.password === userInputHashedPassword){
          console.log('checking new pass', user.password, userInputHashedPassword);
          bcrypt.hash(userInfo.body.newPassword, salt, (err, hashedPassword) => {
            return cb(err, hashedPassword);
          })
        } else {
          return cb(err, user.password);
        }
      });
    });
  });
}

userSchema.statics.register = function(userInfo, cb) {
  let password = userInfo.password1;
  let username = userInfo.username;

  console.log("at the start",userInfo)
  // create user model
  console.log('HERE BITCHES', userInfo)
  User.findOne({username: username}, (err, user) => {
    if (err || user) return cb('error registering user');
    console.log('after user.findOne', CONFIG)
    bcrypt.genSalt(CONFIG.saltRounds, (err, salt) => {
      console.log('in salt', salt, err)
      if (err) return cb(err);
      bcrypt.hash(password, salt, (err, hashedPassword) => {
        console.log('in pass hash', hashedPassword)
        if (err) return cb(err);
        let newUser = new User({
          password: hashedPassword,
          username: username
        });
        console.log('AT NEWUSER!!!', newUser)
        newUser.save((err, savedUser) => {
          savedUser.password = null;
          console.log('savedUser: ', savedUser)
          return cb(err, savedUser.token(), savedUser);
        })
      });
    });
  });
};


User = mongoose.model('User', userSchema);
export default User;

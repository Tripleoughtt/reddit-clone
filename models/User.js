import mongoose from 'mongoose';
import jwt from 'jwt-simple';
import bcrypt from 'bcryptjs';
import moment from 'moment';
import CONFIG from "../util/authConfig";

let Schema = mongoose.Schema;
let User;

let userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String },
  name: { type: String },
  phone: { type: String },
  address: { type: String },
  profilePic: { type: String , default: "lib/logo.png", required: true},
  reputation: {type: Number, default: 0, required: true}
});

userSchema.statics.authenticate = (token, cb) => {
  let userInfo = jwt.decode(token, process.env.JWT_SECRET);
  User.findById(userInfo.id, (err, foundUser) => {
    if(err || !foundUser) return cb(null, false);
    return cb(null, true);
  });
}

userSchema.statics.calculateReputation = (userId) => {
  console.log(userId);
  User.findById(userId, (err, foundUser) => {
    console.log(foundUser)
  });
}

userSchema.methods.token = function() {
  let payload = {
    id: this._id,
    iat: moment().unix(),
    exp: moment().add(CONFIG.expTime.num, CONFIG.expTime.unit).unix()
  };
  return jwt.encode(payload, process.env.JWT_SECRET);
};

userSchema.statics.login = function(userInfo, cb) {
  User.findOne({ username: userInfo.username }, (err, foundUser) => {
    if(err) return cb('server error');
    if(!foundUser) return cb('Incorrect Username or Password, please try again!');
    bcrypt.compare(userInfo.password, foundUser.password, (err, isGood) => {
      if(err) return cb('server err');
      if(isGood) {
        foundUser.password = null;
        return cb(null, foundUser.token(), foundUser);
      } else {
        return cb('Incorrect Username or Password, please try again!');
      }
    });
  });
}

userSchema.statics.hashNewPassword = (userInfo, cb) => {
  // Update User Password
  User.findById(userInfo.params.id, (err, user) => {
    if(err) return cb(err);
    bcrypt.genSalt(CONFIG.saltRounds, (err, salt) => {
      if(err) return cb(err);
      bcrypt.hash(userInfo.body.password, salt, (err, userInputHashedPassword) => {
        if(err) return cb(err);
        if(user.password === userInputHashedPassword) {
          bcrypt.hash(userInfo.body.newPassword, salt, (err, hashedPassword) => {
            return cb(err, hashedPassword);
          });
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

  // Create A User Model
  User.findOne({username: username}, (err, user) => {
    if (err || user) return cb('error registering user');
    bcrypt.genSalt(CONFIG.saltRounds, (err, salt) => {
      if (err) return cb(err);
      bcrypt.hash(password, salt, (err, hashedPassword) => {
        if (err) return cb(err);
        let newUser = new User({ password: hashedPassword, username: username });
        newUser.save((err, savedUser) => {
          savedUser.password = null;
          return cb(err, savedUser.token(), savedUser);
        });
      });
    });
  });
};

User = mongoose.model('User', userSchema);
export default User;

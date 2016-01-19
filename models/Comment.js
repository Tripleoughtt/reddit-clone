import mongoose from 'mongoose';
import jwt from 'jwt-simple';
import bcrypt from 'bcryptjs';
import moment from 'moment';
import CONFIG from "../util/authConfig";

var deepPopulate = require('mongoose-deep-populate')(mongoose);

let Schema = mongoose.Schema;

let Comment;

let commentSchema = Schema({
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  body: {type: String},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}).plugin(deepPopulate);

Comment = mongoose.model('Comment', commentSchema);
export default Comment;

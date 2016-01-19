import mongoose from 'mongoose';
import jwt from 'jwt-simple';
import bcrypt from 'bcryptjs';
import moment from 'moment';
import CONFIG from "../util/authConfig";

var deepPopulate = require('mongoose-deep-populate')(mongoose);

let Schema = mongoose.Schema;

let Post;

// need to add comment schema & type
let postSchema = Schema({
  title: {type: String},
  body: {type: String},
  tags: [{type: String}],
  author: {type: Schema.Types.ObjectId, ref: "User"},
  comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
  totalComments: {type: Number, default: 0}
}).plugin(deepPopulate);

Post = mongoose.model('Post', postSchema);

export default Post;

import mongoose from 'mongoose';

let deepPopulate = require('mongoose-deep-populate')(mongoose);
let Schema = mongoose.Schema;

let postSchema = Schema({
  title: { type: String },
  body: { type: String },
  tags: [{ type: String }],
  author: { type: Schema.Types.ObjectId, ref: "User" },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  totalComments: { type: Number, default: 0 }
}).plugin(deepPopulate);

let Post = mongoose.model('Post', postSchema);
export default Post;

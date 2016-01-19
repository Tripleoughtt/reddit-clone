import mongoose from 'mongoose';

let deepPopulate = require('mongoose-deep-populate')(mongoose);
let Schema = mongoose.Schema;

let commentSchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  body: { type: String },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}).plugin(deepPopulate);

let Comment = mongoose.model('Comment', commentSchema);
export default Comment;

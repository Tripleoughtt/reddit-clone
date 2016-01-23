import express from 'express';

// Import Schema To Interact With Mongo
import Comment from '../models/Comment';
import Post from '../models/Post';

// Integrate For Authentication
import { authenticate, passChange } from '../util/authMiddleware';

const router = express.Router();

// Create Comment And Add To A Another Comment
router.post('/:id/newcomment', authenticate, (req, res) => {
  let comment = new Comment();
  comment.author = req.decodedToken.id;
  comment.body = req.body.body;
  comment.save((err, newComment) => {
    Comment.findByIdAndUpdate(req.params.id, { $push: { comments: newComment._id }}, (err) => {
      if(err) return res.status(400).send(err);
      Post.findByIdAndUpdate(req.body.postId, {$inc: {totalComments: 1}},(err, foundPost) => {
        if (err) return res.status(400).send(err);
        Post.findById(req.body.postId, (err, updatedPost) => {
         if(err) return res.status(400).send(err);
          var authorString = [];
          for(var i = 0; i < updatedPost.totalComments; i++){
            authorString.push(`comments${'.comments'.repeat(i)}.author`);
          }
          updatedPost.populate('author').deepPopulate(`${authorString.join(' ')} comments${'.comments'.repeat(updatedPost.totalComments)}`, (err, post) => {
            console.log(post)
            return res.status(err ? 400:200).send(err || post);
          });
        })
      })
    });
  })
});

export default router;

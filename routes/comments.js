import express from 'express';
import Comment from '../models/Comment'
import {authenticate, passChange} from '../util/authMiddleware';

const router = express.Router();

// add new comment to comment
router.post('/:id/newcomment', (req, res) => {
  Comment.create(req.body, (err, newComment) => {
    if (err) return res.status(400).send(err);
    Comment.findByIdAndUpdate(req.params.id, {$push: {comments: newComment}}, (err) => {
      if (err) return res.status(400).send(err);
      Comment.findById(req.params.id, (err, comment) => {
        if (err) return res.status(400).send(err);
        res.send(comment);
      }).populate('comments');
    })
  })
});

export default router;

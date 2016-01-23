import express from 'express';

// Import Schema To Interact With Mongo
import Comment from '../models/Comment';

// Integrate For Authentication
import { authenticate, passChange } from '../util/authMiddleware';

const router = express.Router();

// Create Comment And Add To A Another Comment
router.post('/:id/newcomment', (req, res) => {
  Comment.create(req.body, (err, newComment) => {
    if(err) return res.status(400).send(err);
    Comment.findByIdAndUpdate(req.params.id, { $push: { comments: newComment }}, (err) => {
      if(err) return res.status(400).send(err);
      Comment.findById(req.params.id, (err, comment) => {
        res.status(err ? 400:200).send(err || comment);
      }).populate('comments');
    });
  });
});

export default router;

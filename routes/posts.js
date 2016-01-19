import express from 'express';
import Post from '../models/Post';
import Comment from '../models/Comment';
import {authenticate, passChange} from '../util/authMiddleware';

const router = express.Router();

// get all posts on main page
router.get('/', (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) return res.status(400).send(err);
    res.send(posts);
  });
});

// // get individual post info (after clicking on post)
router.get('/:id', (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) return res.status(400).send(err);
    post.deepPopulate(`comments${'.comments'.repeat(post.totalComments)}`, (err, post) => {
      res.send(post);
    })
  });
});

// add new post
router.post('/', (req, res) => {
  Post.create(req.body, (err, post) => {
    if (err) return res.status(400).send(err);
    res.send(post);
  });
});

// add new comment to post
router.post('/:id/newcomment', (req, res) => {
  Comment.create(req.body, (err, comment) => {
    if (err) return res.status(400).send(err);
    Post.findByIdAndUpdate(req.params.id, {$push: {comments: comment}}, (err) => {
      if (err) return res.status(400).send(err);
      Post.findById(req.params.id, (err, post) => {
        if (err) return res.status(400).send(err);
        res.send(post);
      })
    })
  })
});

export default router;

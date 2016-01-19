import express from 'express';

// Import Schemas To Interact With Mongo
import Post from '../models/Post';
import Comment from '../models/Comment';

// Import Middleware For Authentication --> Uncomment When Needed
// import { authenticate, passChange } from '../util/authMiddleware';

const router = express.Router();

// Get All Posts On Main Page
router.get('/', (req, res) => {
  Post.find({}, (err, posts) => {
    res.status(err ? 400:200).send(err || posts);
  });
});

// Get Individual Post Info (After Clicking On Post)
router.get('/:id', (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if(err) return res.status(400).send(err);
    post.deepPopulate(`comments${'.comments'.repeat(post.totalComments)}`, (err, post) => {
      res.status(err ? 400:200).send(err || post);
    });
  });
});

// Create New Post
router.post('/', (req, res) => {
  Post.create(req.body, (err, post) => {
    res.status(err ? 400:200).send(err || post);
  });
});

// Create Comment and Add Comment To Post
router.post('/:id/newcomment', (req, res) => {
  Comment.create(req.body, (err, comment) => {
    if(err) return res.status(400).send(err);
    Post.findByIdAndUpdate(req.params.id, { $push: { comments: comment }}, (err) => {
      if(err) return res.status(400).send(err);
      Post.findById(req.params.id, (err, post) => {
        res.status(err ? 400:200).send(err || post);
      });
    });
  });
});

export default router;

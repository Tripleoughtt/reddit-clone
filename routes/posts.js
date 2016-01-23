import express from 'express';

// Import Schemas To Interact With Mongo
import Post from '../models/Post';
import Comment from '../models/Comment';


// Import Middleware For Authentication --> Uncomment When Needed
import { authenticate, passChange } from '../util/authMiddleware';

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

    var authorString = []
    for(var i = 0; i < post.totalComments; i++){
      authorString.push(`comments${'.comments'.repeat(i)}.author`);
    }

    post.populate('author').deepPopulate(`${authorString.join(' ')} comments${'.comments'.repeat(post.totalComments)}`, (err, post) => {
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
router.post('/:id/newcomment', authenticate, (req, res) => {
  let comment = new Comment (req.body);
  comment.author = req.decodedToken.id;
  comment.save((err, savedComment) => {
    if(err) return res.status(400).send(err);
    Post.findByIdAndUpdate(req.params.id, { $push: { comments: comment }}, (err) => {
      if(err) return res.status(400).send(err);
      Post.findById(req.params.id, (err, post) => {
        var authorString = []
        for(var i = 0; i < post.totalComments; i++){
          authorString.push(`comments${'.comments'.repeat(i)}.author`);
        }
        post.populate('author').deepPopulate(`${authorString.join(' ')} comments${'.comments'.repeat(post.totalComments)}`, (err, post) => {
          return res.status(err ? 400:200).send(err || post);
        });
      });
    });
  })
});

// Update An Indivual Post
router.put('/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, post) => {
    if(err) return res.status(400).send(err);
    Post.findById(req.params.id, (err, updatedPost) => {
      res.status(err ? 400:200).send(err || updatedPost);
    });
  });
});

// Delete A Single User
router.delete('/:id', (req, res) => {
  Post.findByIdAndRemove(req.params.id, (err) => {
    res.status(err ? 400:200).send(err || 'Post Deleted');
  });
});

export default router;

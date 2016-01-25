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
  }).populate('author');
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
router.post('/', authenticate, (req, res) => {
  req.body.author = req.decodedToken.id;
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
    Post.findByIdAndUpdate(req.params.id, { $push: { comments: comment }, $inc: {totalComments: 1}}, (err) => {
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

// Vote on a post
router.post('/vote/:id', (req, res) => {
  let direction = req.body.direction === 'up' ? 1 : -1;
  Post.findByIdAndUpdate(req.params.id, {$inc: { votes: direction }}, (err, oldPost) => {
    if(err) return res.status(400).send(err);

    Post.find({}, (err, posts) => {
      res.status(err ? 400:200).send(err || posts);
    }).populate('author');
  });
});

// Update An Indivual Post
router.post('/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, oldPost) => {
    if(err) return res.status(400).send(err);
    Post.findById(req.params.id, (err, updatedPost) => {
      var authorString = []
      for(var i = 0; i < updatedPost.totalComments; i++){
        authorString.push(`comments${'.comments'.repeat(i)}.author`);
      }

      updatedPost.populate('author').deepPopulate(`${authorString.join(' ')} comments${'.comments'.repeat(updatedPost.totalComments)}`, (err, post) => {
        res.status(err ? 400:200).send(err || post);
      });
    });
  });
});



// Delete A Single Post
router.delete('/:id', (req, res) => {
  Post.findByIdAndRemove(req.params.id, (err) => {
    res.status(err ? 400:200).send(err || 'Post Deleted');
  });
});

export default router;

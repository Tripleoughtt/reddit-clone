import express from 'express';

// Import Schemas To Interact With Mongo
import User from '../models/User';
import Post from '../models/Post';
import Comment from '../models/Comment';
import {calculateReputation} from '../models/UserMethods';


// Import for authentication
import { authenticate, passChange } from '../util/authMiddleware';

const router = express.Router();

// Get authorization for blocked routes
router.get('/authorize', (req, res) => {
  let unAuthed = "Error with authentication, please try again!";
  if(!req.cookies.token) return res.status(401).send(unAuthed);

  User.authenticate(req.cookies.token, (err, isAuthenticated) => {
    return res.status(err ? 400 : 200).send(isAuthenticated || unAuthed);
  });
});

// Get All Posts For User
router.get('/myposts', authenticate, (req, res) => {
  Post.find({ author: req.decodedToken.id }, (err, posts) => {
    res.status(err ? 400:200).send(err || posts);
  }).populate('comments');
});

// Get Single User
// router.get('/:id', (req, res) => {
//   User.findById(req.params.id, (err, user) => {
//     user.password = null;
//     res.status(err ? 400:200).send(err || user);
//   });
// });

// Get Logged In User
router.get('/myinfo', authenticate, (req, res) => {
  User.findById(req.decodedToken.id, (err, user) => {
    if (err) return res.status(400).send(err);
    user.password = null;
    res.status(200).send(user);
  });
});

// Get Comments For Single User
router.get('/comments/:id', (req, res) => {
  Comment.find({ author: req.params.id }, (err, comments) => {
    res.send(err ? 400:200).send(err || comments);
  });
});

// Logging In
router.post('/login', (req, res) => {
  User.login(req.body, (err, token, userInfo) => {

    if(err) return res.status(401).send(err);
    res.status(200).cookie("token", token).send(userInfo);
  });
});

// Registering A User
router.post('/register', (req, res) => {
  User.register(req.body, (err, token, userInfo) => {
    if(err) return res.status(400).send(err);
    res.status(200).cookie("token", token).send(userInfo);
  });
});

// // Edit User Info
// router.put('/edit/:id', passChange, (req, res) => {
//   User.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, user) => {
//     if(err) return res.status(400).send('error', err);
//     User.findById(req.params.id, (err, updatedUser) => {
//       res.status(err ? 400:200).send(err || updatedUser);
//     });
//   });
// });

// Edit User Info
router.post('/edit', authenticate, (req, res) => {
  User.findByIdAndUpdate(req.decodedToken.id, { $set: req.body }, (err, user) => {
    if(err) return res.status(400).send('error', err);
    User.findById(req.decodedToken.id, (err, updatedUser) => {
      res.status(err ? 400:200).send(err || updatedUser);
    });
  });
});

// Delete A User
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err) => {
    res.status(err ? 400:200).send(err || 'user deleted');
  });
});

export default router;

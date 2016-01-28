import express from 'express';

// Import Schema To Interact With Mongo
import Comment from '../models/Comment';
import Post from '../models/Post';
import User from '../models/User';
import {calculateReputation} from '../models/UserMethods';


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
            
            return res.status(err ? 400:200).send(err || post);
          });
        })
      })
    });
  })
});
router.post('/vote/:id', authenticate, (req, res) => {
  let direction = req.body.direction === 'up';
  let voteObj = {
    user: req.decodedToken.id,
    vote: direction
  };
  Comment.findById(req.params.id, (err, foundComment) => {
    if(err) return res.status(400).send(err);

    // check if user has voted - userId in votes array?
    let index;
    let voteToChange = foundComment.votes.filter((userVote, i) => {
      //
      if (userVote.user == req.decodedToken.id){
        index = i;
        return userVote;
      }
    })


    // if user has voted already
    if (voteToChange.length){
      // 1) vote:true && direction:true => user wants to unvote an upvote
      // 4) vote:false && direction:false => user wants to unvote a downvote
      if (voteToChange[0].vote === direction){
        foundComment.votes.splice(index, 1);
        saveAndReturn(foundComment);

      // 2) vote: true && direction: false => user wants to change upvote to downVote
      // 3) vote: false && direction: true => user wants to change downvote to upvote
      } else {
        foundComment.votes[index].vote = !foundComment.votes[index].vote;
        saveAndReturn(foundComment);
      }

    // user has not voted yet
    } else {
      foundComment.votes.push(voteObj);
      saveAndReturn(foundComment);
    }

    function saveAndReturn(commentToBeSaved){
      commentToBeSaved.save((err, savedComment) => {
        if (err) return res.status(400).send(err);
        Post.findById(req.body.postId, (err, post) => {
          
   
          var authorString = []
          for(var i = 0; i < post.totalComments; i++){
            authorString.push(`comments${'.comments'.repeat(i)}.author`);
          }
          calculateReputation(foundComment.author);
          post.populate('author').deepPopulate(`${authorString.join(' ')} comments${'.comments'.repeat(post.totalComments)}`, (err, post) => {
            res.status(err ? 400:200).send(err || post);
          });
        })
      })
    }
  })
});
export default router;

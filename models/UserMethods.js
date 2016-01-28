import User from './User';
import Comment from './Comment';
import Post from './Post';

function calculateReputation(userId){
  User.findById(userId, (err, foundUser) => {
    Comment.find({author: foundUser._id}, (err, userComments) => {
      Post.find({author: foundUser._id}, (err, userPosts) => {
        let commentTotal = userComments.reduce((total, userComment) => {
          return total + (userComment.votes.reduce((a, commentVote) => commentVote.vote ? a + 1 : a - 1, 0))
        }, 0);
        let postTotal = userPosts.reduce((total, userPost) => {
          return total + (userPost.votes.reduce((a, postVote) => postVote.vote ? a + 1 : a - 1, 0))
        }, 0);
        console.log( "Comment total here: ", commentTotal);
        console.log("Post total here: ", postTotal);
        console.log("reputation total here: ", commentTotal + postTotal);

      });
    });
  });
}


export {calculateReputation}

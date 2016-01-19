import express from 'express';
import User from '../models/User'
import {authenticate, passChange} from '../util/authMiddleware';

const router = express.Router();

router.post('/login', (req, res) => {
  User.login(req.body, (err, token) => {
    if (err) return res.status(400).send(err);
    res.cookie("token", token).send();
  });
});

router.post('/register', (req, res) => {
  User.register(req.body, (err, token) => {
    if(err) return res.status(400).send(err);
    res.cookie("token", token).send();
  });
});

router.put('/edit/:id', passChange, (req, res) => {
  console.log('FUCK')
  console.log(req.body)
  User.findByIdAndUpdate(req.params.id, {$set: req.body} ,(err, user) => {
    if(err) return res.status(400).send('THIS FUCKING ERRER', err);
    User.findById(req.params.id, (err, updatedUser) => {
      res.status(err ? 400 : 200).send(err || updatedUser);
    });
  });
});

export default router;

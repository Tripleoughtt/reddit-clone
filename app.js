// Basic imports for express
import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// Imports for GraphQL --> Uncomment when prepared to refractor or remove
// import schema from "./data/schema";
// import GraphQLHTTP from "express-graphql";

// Import routes from /routes
import userRoutes from './routes/users';
import postRoutes from './routes/posts';
import commentRoutes from './routes/comments';

const PORT = process.env.PORT || 3000;
const app = express();

// Mongoose connection
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/reddit-clone");

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

// Setup for GraphQS connection refer to note above
// app.use("/graphql", GraphQLHTTP({
//  schema,
//  graphiql: true
// }));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Catch 404 And Forward To Error Handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Development Error Handler
// Will Print Stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production Error Handler
// No Stacktraces Leaked To User
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// Setup Portto Listen And Print Confirmation When Connected
app.listen(PORT, () => {
  console.log(`Listening On Port ${PORT}`);
});

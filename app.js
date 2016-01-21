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

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

// Setup for GraphQS connection refer to note above
// app.use("/graphql", GraphQLHTTP({
//  schema,
//  graphiql: true
// }));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})


// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// Setup portto listen and print confirmation when connected
app.listen(PORT, () => {
  console.log(`I'm listening on this port: ${PORT}`);
});

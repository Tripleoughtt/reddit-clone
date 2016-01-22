import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link, browserHistory, hashHistory, IndexRoute} from 'react-router';

import AppController from "./components/AppController";
import NotLoggedInHome from "./components/views/NotLoggedInHome";
import LoggedInHome from "./components/views/LoggedInHome";
import AddNewPost from './components/views/AddNewPost';
import ViewPost from './components/views/ViewPost';
import PostWrapper from './components/views/PostWrapper';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={AppController} >
      <IndexRoute component={NotLoggedInHome} />
      <Route path="home" component={LoggedInHome} />
      <Route path="addpost" component={AddNewPost} />
      <Route path="post" component={PostWrapper}>
        <Route path=":postId" component={ViewPost} />
      </Route>
    </Route>
  </Router>
), document.getElementById("react"));

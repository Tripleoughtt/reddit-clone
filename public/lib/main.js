import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

import AppController from "./components/AppController";
import NotLoggedInHome from "./components/views/NotLoggedInHome";
import LoggedInHome from "./components/views/LoggedInHome";
import AddNewPost from './components/views/AddNewPost';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={AppController} >
      <IndexRoute component={NotLoggedInHome} />
      <Route path="home" component={LoggedInHome} />
      <Route path="addpost" component={AddNewPost} />
    </Route>
  </Router>
), document.getElementById("react"));

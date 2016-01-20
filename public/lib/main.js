import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

import AppController from "./components/AppController";
import Home from "./components/Home";
import UserHome from "./components/UserHome";

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={AppController} >
      <IndexRoute component={Home} />
      <Route path="home" component={UserHome} />
    </Route>
  </Router>
), document.getElementById("react"));

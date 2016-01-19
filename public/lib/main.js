import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

import AppController from "./components/AppController";
import Home from "./components/Home";

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={AppController} path="/">
      <IndexRoute component={Home} />
    </Route>
  </Router>
), document.getElementById("react"));

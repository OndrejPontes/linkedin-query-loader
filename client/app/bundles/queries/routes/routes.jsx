import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Header from "../components/Header"
import Queries from "../containers/Queries";
import Keywords from "../containers/Keywords"

export default (
  <Route path="/" component={ Header }>
    <IndexRoute component={ Queries }/>
    <Route path="keywords" component={ Keywords }/>
  </Route>
)
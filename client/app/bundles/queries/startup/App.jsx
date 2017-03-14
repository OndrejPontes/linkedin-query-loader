import React from 'react';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';
import ReactOnRails from 'react-on-rails'

import MainLayout from "../components/MainLayout"
import Queries from "../containers/Queries";
import Keywords from "../containers/Keywords"

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext
export default (props, _railsContext) => {
  const store = ReactOnRails.getStore('QueriesStore');

  const history = syncHistoryWithStore(browserHistory, store);

  const reactComponent = (
    <Provider store={store}>
      <Router history={ history }>
        <Route path="/" component={ MainLayout }>
          <IndexRoute component={ Queries }/>
          <Route path="keywords" component={ Keywords }/>
        </Route>
      </Router>
    </Provider>
  );

  return reactComponent;
};

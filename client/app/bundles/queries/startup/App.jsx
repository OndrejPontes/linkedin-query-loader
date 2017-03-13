import React from 'react';
import { Provider } from 'react-redux';
import ReactOnRails from 'react-on-rails';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory } from 'react-router';

import createStore from "../store/queriesStore";
import Header from "../components/Header"
import Queries from "../containers/Queries";
import Keywords from "../containers/Keywords"

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext
const App = (props, _railsContext) => {
  const store = createStore(props);

  const history = syncHistoryWithStore(browserHistory, store);

  const reactComponent = (
    <Provider store={store}>
      <Router history={ history }>
        <Route path="/" component={ Header }>
          <IndexRoute component={ Queries }/>
          <Route path="keywords" component={ Keywords }/>
        </Route>
      </Router>
    </Provider>
  );

  return reactComponent;
};

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({App});

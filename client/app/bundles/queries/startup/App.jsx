import React from 'react'
import ReactOnRails from "react-on-rails";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from "react-redux";
import {syncHistoryWithStore} from "react-router-redux";
import {Router, browserHistory, Route, IndexRoute} from "react-router";
import MainLayout from "../components/MainLayout";
import Queries from "../containers/Queries";
import Keywords from "../containers/Keywords";

export default () => {
  injectTapEventPlugin();
  const store = ReactOnRails.getStore('QueriesStore');

  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <Router history={ history }>
          <Route path="/" component={ MainLayout }>
            <IndexRoute component={ Queries }/>
            <Route path="keywords" component={ Keywords }/>
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};

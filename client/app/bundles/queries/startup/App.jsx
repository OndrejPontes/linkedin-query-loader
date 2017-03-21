import React from "react";
import ReactOnRails from "react-on-rails";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Provider} from "react-redux";
import {syncHistoryWithStore} from "react-router-redux";
import {browserHistory} from "react-router";
import Root from '../components/Root'

export default () => {
  window.tapInjected = true;
  if (window && !window.tapInjected) {injectTapEventPlugin()}
  const store = ReactOnRails.getStore('QueriesStore');

  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <Root />
      </MuiThemeProvider>
    </Provider>
  );
};

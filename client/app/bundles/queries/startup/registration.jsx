import ReactOnRails from 'react-on-rails';

import App from './App';
import QueriesStore from '../store/QueriesStore'

ReactOnRails.setOptions({
  traceTurbolinks: TRACE_TURBOLINKS, // eslint-disable-line no-undef
});

ReactOnRails.register({
  App,
});

ReactOnRails.registerStore({
  QueriesStore,
});

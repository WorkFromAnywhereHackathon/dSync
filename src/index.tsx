import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configuredStore from 'store';
import AppRouter from 'router';
import { MuiThemeProvider } from '@material-ui/core';
import MuiTheme from './theme';
import './i18n';

import './index.scss';

ReactDOM.render(
  <Provider store={configuredStore}>
    <MuiThemeProvider theme={MuiTheme}>
      <AppRouter />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

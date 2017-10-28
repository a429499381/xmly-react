import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router'
import {Provider} from 'react-redux'
import configureStore from './redux/store/configureStore'

import RouteMap from './Router/index'
import registerServiceWorker from './registerServiceWorker';

const store = configureStore()

  ReactDOM.render(
  <Provider store={store}>
    <RouteMap history={hashHistory}/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
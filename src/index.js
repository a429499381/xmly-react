import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router'
import LoadIcon from '../src/PageCom/loadIcon'


import RouteMap from './Router/index'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <RouteMap history={hashHistory}/>,
  document.getElementById('root')
);
registerServiceWorker();
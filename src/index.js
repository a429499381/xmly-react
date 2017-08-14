import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router'

import RouteMap from './Router/index'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <RouteMap history={hashHistory}/>,<App />, document.getElementById('root'));
registerServiceWorker();



// import RouteMap from './router/routeMap'
//
// render(
//   <Provider store={store}>
//     <RouteMap history={hashHistory}/>
//   </Provider>,
//   document.getElementById('root')
// )
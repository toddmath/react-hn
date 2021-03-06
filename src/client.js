import React from 'react';
import {render} from 'react-dom';
import Routes from './routes.js';
import './core/api/memory.js';
import {storeListData} from './core/api/list.js';	

import './reset.css';

if (POLYFILL_OBJECT_ASSIGN) {
  // This is supplied by WebpackConfiguration.
  require('object-assign-polyfill');
}
if (POLYFILL_OBJECT_VALUES) {
  // This is supplied by WebpackConfiguration.
  require('object.values').shim();
}
if (POLYFILL_PROMISES) {
  // This is supplied by WebpackConfiguration.
  window.Promise = require('promise-polyfill');
}
if (POLYFILL_FETCH) {
  // This is supplied by WebpackConfiguration.
  require('unfetch/polyfill');
}
if (POLYFILL_URL) {
  require('url-polyfill');
}

window.seed && storeListData(window.seed);
const mountEl = document.getElementById('mount');
render(<Routes />, mountEl);

if (ALLOW_OFFLINE) {
  // This is supplied by WebpackConfiguration.
  require('offline-plugin/runtime').install();
}
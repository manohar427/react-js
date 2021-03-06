import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Example from './Example';
import SpreadOperator from './SpreadOperator';
import ObjectDemo from './ObjectDemo';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <SpreadOperator/>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();

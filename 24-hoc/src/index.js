import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Counter_Hoc from './Counter_Hoc';

ReactDOM.render(
  <React.StrictMode>
    <Counter_Hoc/>
  </React.StrictMode>,
  document.getElementById('root')
);


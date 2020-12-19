import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import UserInput from './custHooks/UserInput';
//import Counter1 from './custHooks/Counter1';

ReactDOM.render(
  <React.StrictMode>
    <UserInput/>
  </React.StrictMode>,
  document.getElementById('root')
);
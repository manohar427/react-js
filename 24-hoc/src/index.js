import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ES7React from './ES7React';

import {TestFunc} from './TestFunc';
import Counter_Hoc from './Counter_Hoc';

ReactDOM.render(
  <React.StrictMode>
    <ES7React/>
  </React.StrictMode>,
  document.getElementById('root')
);


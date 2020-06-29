import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Items from './Items';
import * as serviceWorker from './serviceWorker';
import CalendarPicker from './CalendarPicker';
import ReactDatePicker from './ReactDatePicker';
import BootCal from './BootCal';
import Abc from './CustomBoot';
import Parent from './Parent';
import FloatTest from './FloatTest';



ReactDOM.render(
  <React.StrictMode>
    <FloatTest/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

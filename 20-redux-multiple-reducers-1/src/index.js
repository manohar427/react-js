import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from "redux";
import reducer from './reducer/reducer';
import index from './reducer/index';

const logAction = store =>{
   return next =>{
       return action =>{
          // const result = next(action);;
           //console.log('caught action: ${JSON.stringify(result)}');
       }
   }
};
const store  = createStore(index,applyMiddleware(logAction));
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
document.getElementById('root'));




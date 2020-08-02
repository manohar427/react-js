import React from 'react';
import './App.css';
import Spinner from'./com/test/Spinner';

import MainComponent from'./com/test/MainComponent';
import ReactTooltip from 'react-tooltip';
import Button from 'react-bootstrap/Button';
import ToggleDemo from './ToggleDemo';


class App extends React.Component {
  

  render() {
    
    return (
      <>
       <ToggleDemo/>
      </>
    );
  }
}

export default App;

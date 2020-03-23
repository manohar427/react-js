import React, { Component } from 'react';

import ChildComponent from './ChildComponent';

export default class MainComponent extends Component {
  constructor (props) {
       super(props);
      this.label = "Im your father";
  };

  onSubmit = (option) => (option === "I’m your father" ? 'cool' : 'not cool');

  render () {
    return(
      <>
        <ChildComponent label={this.label} onSubmit={this.onSubmit} />
      </>
    );
  };
};
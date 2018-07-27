import React, {Component} from 'react';
import Router from './router';
import {Container} from 'amazeui-touch';
import 'amazeui-touch/dist/amazeui.touch.min.css';
import './App.styl';

class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <Container className="page-container">
        <Router />
      </Container>
    );
  }
}

export default App;

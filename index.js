import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import './theme.css';
import AppView from './AppView'

class App extends Component {
  render() {
    return <AppView />
  }
}

render(<App />, document.getElementById('root'));
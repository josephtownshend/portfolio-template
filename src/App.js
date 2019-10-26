import React from 'react';
import Slideshow from './components/Slideshow';
import Header from './components/Header';
import Writing from './components/Writing';
import './App.css';

export default class App extends React.Component {

  state = {
    visible: true
  }

  render() {
    return (
      <div className="App">
        <Header />
        { this.state.visible ? <Slideshow /> : <Writing /> }
      </div>
    );
  }
}

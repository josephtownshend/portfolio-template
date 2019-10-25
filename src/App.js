import React from 'react';
import Slideshow from './components/Slideshow';
import Header from './components/Header';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slideshow />
      </div>
    );
  }
}

import React from 'react';
import Slideshow from './components/Slideshow';
import Header from './components/Header';
import Writing from './components/Writing';
import About from './components/About';
import './App.css';

export default class App extends React.Component {

  state = {
    whichComponentToShow: "Slideshow"
  }

  render() {
    if (this.state.whichComponentToShow === "Slideshow") {
      return (
        <div className="App">
          <Header />
          <Slideshow />
        </div>
      )
    } else if (this.state.whichComponentToShow === "Writing") {
      return (
        <div className="App">
          <Header />
          <Writing />
        </div>
      )
    } else if (this.state.whichComponentToShow === "About") {
      return (
        <div className="App">
          <Header />
          <About />
        </div>
      )
    }
  }
}

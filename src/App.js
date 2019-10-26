import React from 'react';
import Slideshow from './components/Slideshow';
import Header from './components/Header';
import Writing from './components/Writing';
import './App.css';

export default class App extends React.Component {

  state = {
    whichComponentToShow: "Slideshow"
  }

  render() {
    if (this.state.whichComponentToShow === "Slideshow") {
      return (
        <div className="App">
          <Slideshow />
        </div>
      )
    } else if (this.state.whichComponentToShow === "Writing") {
      return (
        <div className="App">
          <Writing />
        </div>
      )
    } else if (this.state.whichComponentToShow === "About") {
      return (
        <div className="App">
          <About />
        </div>
      )
    }
  }  
}

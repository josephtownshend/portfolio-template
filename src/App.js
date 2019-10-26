import React from 'react';
import Slideshow from './components/Slideshow';
import Header from './components/Header';
import Writing from './components/Writing';
import About from './components/About';
import './App.css';

export default class App extends React.Component {

  state = {
    whichComponent: "Slideshow"
  };

  handleChangeTitle = () => {
    this.setState({
      whichComponent: "Slideshow"
    });
  };

  handleChangeWriting = () => {
    this.setState({
      whichComponent: "Writing"
    });
  };

  handleChangeAbout = () => {
    this.setState({
      whichComponent: "About"
    });
  };

  render() {
    if (this.state.whichComponent === "Slideshow") {
      return (
        <div className="App">
          <Header
            whichComponent={this.state.whichComponent}
            handleChangeAbout={this.handleChangeAbout}
            handleChangeWriting={this.handleChangeWriting}
            handleChangeTitle={this.handleChangeTitle}
          />
          <Slideshow />
        </div>
      );
    } else if (this.state.whichComponent === "Writing") {
      return (
        <div className="App">
          <Header />
          <Writing />
        </div>
      );
    } else if (this.state.whichComponent === "About") {
      return (
        <div className="App">
          <Header />
          <About />
        </div>
      );
    }
    return null;
  }
}

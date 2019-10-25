import React from 'react';

export default class Slideshow extends React.Component {

  state = {
    images: [
      "http://www.fruttagallery.com/wp-content/uploads/1.LaurenKeeley_InaYear_2015_Frutta.jpg",
      "http://www.fruttagallery.com/wp-content/uploads/2.LaurenKeeley_InaYear_2015_Frutta.jpg",
      "http://www.fruttagallery.com/wp-content/uploads/3.LaurenKeeley_InaYear_2015_Frutta.jpg",
      "http://www.fruttagallery.com/wp-content/uploads/4.LaurenKeeley_InaYear_2015_Frutta.jpg"
    ],
    index: 0
  };

  handleNext = () => {
    this.setState({
      index: this.state.index + 1
    });
  }

  handlePrevious = () => {
    this.setState({
      index: this.state.index -1
    })
  }



  render() {
    return(
      <div>
        <button onClick={this.handlePrevious}>previous</button>
        <img
          style={{
            width:1000
          }}
          src={this.state.images[this.state.index]} alt="Lauren Keeley"
        />
        <button onClick={this.handleNext}>next</button>
      </div>
    );
  }
}

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
    if (this.state.index >= 0 && this.state.index < 3) {
      this.setState({
        index: this.state.index + 1
      });
    }
  }

  handlePrevious = () => {
    if (this.state.index >= 1 && this.state.index <= 3) {

      this.setState({
        index: this.state.index -1
      })
    }
  }

  render() {
    return(
      <React.Fragment>
        <div>
          <img
            style={{
              width:900
            }}
            src={this.state.images[this.state.index]} alt="Lauren Keeley"
          />
        </div>
        <div>
          <button onClick={this.handlePrevious} className="Button">Previous</button>
          <button onClick={this.handleNext} className="Button">Next</button>
        </div>
      </React.Fragment>
    );
  }
}

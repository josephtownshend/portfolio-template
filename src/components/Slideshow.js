import React from 'react';

export default class Slideshow extends React.Component {

  state = {
    images: [
      "http://www.fruttagallery.com/wp-content/uploads/1.LaurenKeeley_InaYear_2015_Frutta.jpg",
      "http://www.fruttagallery.com/wp-content/uploads/2.LaurenKeeley_InaYear_2015_Frutta.jpg",
      "http://www.fruttagallery.com/wp-content/uploads/3.LaurenKeeley_InaYear_2015_Frutta.jpg",
      "http://www.fruttagallery.com/wp-content/uploads/4.LaurenKeeley_InaYear_2015_Frutta.jpg"
    ]
  };

  render() {
    return(
      <div>
        <button>previous</button>
        <img
          style={{
            width:1000
          }}
          src={this.state.images[0]} alt="Lauren Keeley"
        />
        <button>next</button>
      </div>
    );
  }
}

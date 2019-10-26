import React from 'react';
import '../App.css';

export default class About extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="CV">
          <ul className="List">
            <h2>Artist Name</h2>
            <li>Born 1980, London, UK</li>
          </ul>

            <h2>Solo Exhibitions</h2>
          <ul className="List">
            <li><i>Solo</i>, White Cube London, 1990</li>
            <li><i>On My Own</i>, Tate Modern, London, 1999</li>
            <li><i>All By Myself</i>, Gagosian, London 2001</li>
            <li><i>Me, Myself & I</i>, Sadie Coles, London 2005</li>
          </ul>

            <h2>Group Exhibitions</h2>
          <ul className="List">
            <li><i>Just The Two of Us</i>, White Cube, London, 1990</li>
            <li><i>Threes a Crowd</i>, Tate Modern, London, 1999</li>
            <li><i>Crowded, Gagosian</i>, London, 2001</li>
            <li><i>2's Company</i>, Sadie Coles, 2005</li>
          </ul>

            <h2>Prizes</h2>
          <ul className="List">
            <li><i>Excellence</i>, So and So Foundation, 1990</li>
            <li><i>Brilliance</i>, Money Bags, 1999</li>
            <li><i>The Best Prize</i>, The Big One, 2001</li>
            <li><i>Another Great One</i>, Hedgefund, 2005</li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

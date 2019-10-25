import React from 'react';
import '../App.css';

export default class Header extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="NavBar">
          <div className="SiteTitle">Lauren Keeley</div>
          <div className="SubMenu">About</div>
          <div className="SubMenu">Writing</div>
        </div>
      </React.Fragment>
    );
  }
}

import React from 'react';
import '../App.css';

export default class Header extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="NavBar">
          <button onClick={this.props.handleChangeTitle} className="Button_title">Artist Website</button>
          <button onClick={this.props.handleChangeAbout} className="Button_subMenu">About</button>
          <button onClick={this.props.handleChangeWriting} className="Button_subMenu">Writing</button>
          <button onClick={this.props.handleChangeContact} className="Button_subMenu">Contact</button>
        </div>
      </React.Fragment>
    );
  }
}

import React from 'react';
import '../App.css';

export default class Header extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.props.handleChangeTitle} className="Button_title">Artist Website</button>
          <button onClick={this.props.handleChangeAbout} className="Button_subMenu">About</button>
          <button onClick={this.props.handleChangeWriting} className="Button_subMenu">Writing</button>
        </div>
      </React.Fragment>
    );
  }
}

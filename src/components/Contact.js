import React from 'react';
import '../App.css';

export default class Contact extends React.Component {

  render() {
    return(
      <div>
        <p className="BlockText">
          For all sales enquires please get in touch with <a href = "mailto: info@gallery.com">Gallery Gallery</a>.
        </p>
        <p className="BlockText">
          For all other enquires please get in touch <a href = "mailto: info@personal.com">directly</a>.
        </p>
        <br />
        <p className="BlockText">
          My Artist Studio <br />
          123 Studio <br/>
          The Studio Building<br/>
          London<br/>
          SE15 123
        </p>
      </div>
    )
  }
}

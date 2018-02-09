
import React, { Component } from 'react';
class Intro extends Component {


  render() {
    return (
      <div className="Intro">
        <div className="intro-front">
          <h1>Joshua Lee</h1>
        </div>
        <div className="intro-back"></div>
        <div className="planet" id='planet1'><div>scroll down for more content!</div></div>
        <div className="planet" id='planet2'></div>
        <div className="planet" id='planet3'></div>
        <div id="nav-message">&lt; Navigate using this!</div>
      </div>
    );
  }
}

export default Intro;

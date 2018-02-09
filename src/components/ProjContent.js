
import React, { Component } from 'react';

class ProjContent extends Component {


  render() {
    return (
      <div className="Content">
        <h2>Client-Server Hotspot</h2>
        <p>A client-server application that provides internet connectivity to clients, where clients have different access privileges based on their access codes.</p>
        <h2>Party-Music</h2>
        <p>Music web-app that utilizes Spotify's web API to allow users to queue tracks from their favorite artists on Spotify and vote on which song to play next.</p>
        <h2>BendShop</h2>
        <p>Photoshop app that used bend sensors to select from a gradient of values based on the degree of bending.</p>
        <h2>Quibble</h2>
        <p>Kiosk application that allowed users to buy or refund tickets and admins to create events, delete events, and generate tickets.</p>
      </div>
    );
  }
}

export default ProjContent;

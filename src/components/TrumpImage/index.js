import React, { Component } from 'react';
import image from './trump.png';
import './styles.css';

class TrumpImage extends React.Component {
  render() {
    return (
      <div className="image-container">
        <img className="trump-image" src={image}/>
      </div>
    );
  }
}

export default TrumpImage;

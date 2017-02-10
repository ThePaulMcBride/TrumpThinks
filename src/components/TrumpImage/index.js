import React, { Component } from 'react';
import image from './trump.png';
import './styles.css';

class TrumpImage extends Component {
  render() {
    return (
      <div className="image-container">
        <img className="trump-image" src={image} alt="Donald Trump Illustration" />
      </div>
    );
  }
}

export default TrumpImage;

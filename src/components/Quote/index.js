import React, { Component } from 'react';
import './style.css';

class Quote extends Component {

  render() {
    if (this.props.quote) {
      return <blockquote className="quote">
        <p>{this.props.quote}</p>
        <cite>Donald Trump</cite>
      </blockquote>
    }
    return null;
  }
}

export default Quote;

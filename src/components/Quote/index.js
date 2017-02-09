import React, { Component } from 'react';

class Quote extends React.Component {

  render() {
    if (this.props.quote) {
      return <h3>{this.props.quote}</h3>
    }
    return null;
  }
}

export default Quote;

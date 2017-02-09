import React, { Component } from 'react';

class Form extends React.Component {
  state = {
    name: ''
  }

  onNameChange = e => {
    this.setState({ name: e.target.value });
  }

  submitName = (e) => {
    e.preventDefault();
    if (this.state.name.trim().length) {
      this.props.getQuote(this.state.name.trim());
    }
    this.setState({name: ''});
  }

  render() {
    return (
      <form onSubmit={this.submitName}>
        <label className='label'>
          Your Name:
          <input type='text' name='name' placeholder='Your name' value={this.state.name} onChange={this.onNameChange}/>
        </label>

      </form>
    );
  }
}

export default Form;

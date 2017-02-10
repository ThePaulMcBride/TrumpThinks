import React, { Component } from 'react';
import './styles.css';

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
      <form onSubmit={this.submitName} className='name-form'>
        <input type='text' name='name' className='name-field' placeholder='Your name' value={this.state.name} onChange={this.onNameChange}/>
        <input type='submit' className='submit' />
      </form>
    );
  }
}

export default Form;

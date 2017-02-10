import React, { Component } from 'react';
import './styles.css';

class Form extends Component {
  onNameChange = e => {
    this.props.updateName(e.target.value);
  }

  submitName = (e) => {
    e.preventDefault();
    this.props.getQuote();
  }

  renderForm() {
    return (
      <form onSubmit={this.submitName} className='name-form'>
        <input type='text' name='name' className='name-field' placeholder='Your name' value={this.props.name} onChange={this.onNameChange}/>
        <input type='submit' className='submit' />
      </form>
    );
  }

  renderButtons() {
    return (
      <div>
        <input type='submit' className='submit' value='Another' onClick={this.props.refresh} />
        <input type='submit' className='submit reset' value='Reset' onClick={this.props.reset} />
      </div>

    );
  }

  render() {
    if(this.props.quote) {
      return this.renderButtons();
    }
    return this.renderForm();
  }
}

export default Form;

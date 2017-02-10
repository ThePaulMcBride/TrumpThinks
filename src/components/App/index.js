import React, { Component } from 'react';
import axios from 'axios';
import './styles.css';

import Header from '../Header';
import Quote from '../Quote';
import Form from '../Form';
import TrumpImage from '../TrumpImage';

class App extends Component {
  state = {
    name: '',
    quote: undefined
  }

  componentDidMount() {
    const name = this.getUrlParameter('name');

    if (name) {
      this.generateQuote(name);
    }
  }

  updateName = (name) => {
    this.setState({ name: name });

    setTimeout(() => console.log(this.state.name), 500);
  }

  submitForm = () => {
    if (this.state.name.trim().length) {
      this.generateQuote(this.state.name.trim());
    }

  }

  reset = () => {
    this.setState({
      name: '',
      quote: undefined
    });
  }

  refresh = () => {
    this.generateQuote(this.state.name);
  }

  generateQuote = (name) => {
    this.updateQueryStringParam('name', name);

    axios.get(`https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${name}`)
      .then((response) => {
        this.setState({quote: response.data.message});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  updateQueryStringParam(key, value) {
    let baseUrl = [location.protocol, '//', location.host, location.pathname].join(''),
        urlQueryString = document.location.search,
        newParam = key + '=' + value,
        params = '?' + newParam;

    // If the "search" string exists, then build params from it
    if (urlQueryString) {
        const keyRegex = new RegExp('([?&])' + key + '[^&]*');

        // If param exists already, update it
        if (urlQueryString.match(keyRegex) !== null) {
            params = urlQueryString.replace(keyRegex, "$1" + newParam);
        } else { // Otherwise, add it to end of query string
            params = urlQueryString + '&' + newParam;
        }
    }
    window.history.replaceState({}, "", baseUrl + params);
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <Header />
          <div className="app-column-1">
            <TrumpImage />
          </div>
          <div className="app-column-2">
            {
              (!this.state.quote)
                ? <p className="app-intro">What does Donald Trump think of you?</p>
                : null
            }
            <Quote quote={this.state.quote}/>
            <Form
              name={this.state.name}
              quote={this.state.quote}
              getQuote={this.submitForm}
              updateName={this.updateName}
              refresh={this.refresh}
              reset={this.reset}
            />
          </div>
        </div>

        <div className="app-footer">

        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Quote from '../Quote';
import Form from '../Form';

class App extends Component {
  state = {
    quote: undefined
  }

  componentDidMount() {
    this.generateQuote(this.getUrlParameter('name'));
  }

  generateQuote = (name) => {
    this.updateQueryStringParam('name', name);

    axios.get(`https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${name}`)
      .then((response) => {
        console.log(response.data.message);
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
        const keyRegex = new RegExp('([\?&])' + key + '[^&]*');

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
      <div className="App">
        <div className="App-header">
          <h2>Trump Thinks</h2>
        </div>
        <p className="App-intro">
          What does Donald Trump think of you?
        </p>
        <Quote quote={this.state.quote}/>
        <Form getQuote={this.generateQuote}/>
      </div>
    );
  }
}

export default App;

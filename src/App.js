import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false,
    };

    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
  }

  incrementCounter() {
    if (this.state.error) {
      this.setState({ error: false })
    }
    this.setState({ counter: this.state.counter + 1 })
  }

  decrementCounter() {
    if (this.state.counter === 0) {
      this.setState({ error: true })
    } else {
      this.setState({ counter: this.state.counter - 1 })
    }
  }

  render() {

    const errorClass = this.state.error ? '' : 'hidden';

    return (
      <div data-test="component-app" className="ui center aligned raised very padded text container segment">
        <h1 data-test="counter-display" className="ui huge black circular label col-centered">{ this.state.counter }</h1>
        <p></p>
        <button 
          className="ui inverted green button left"
          data-test="increment-button"
          onClick={this.incrementCounter}
          >
          Increment counter
        </button>

        <button
          className="ui inverted red button"
          data-test="decrement-button"
          onClick={this.decrementCounter}
          >
          Decrement counter
        </button>
        <p></p>
        <div data-test="error-message" className={`ui compact message error ${errorClass}`}>
          The counter cannot go below 0
        </div>
      </div>
    );
  }
}

export default App;

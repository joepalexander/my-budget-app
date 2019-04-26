import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    greeting: "Loading..."
  }

  updateGreeting = (newGreeting) => {
    this.setState({greeting: newGreeting });
  }

  fetchGreeting = () => {
    fetch('/greeting')
      .then(response => response.json())
      .then(response => this.updateGreeting(response[0].greeting))
  }

  componentDidMount() {
    console.log("Mounted.")
    this.fetchGreeting();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.state.greeting}</h1>
        </header>
      </div>
    );
  }
}


export default App;

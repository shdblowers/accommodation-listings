import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AccommodationList from './AccommodationList';
import { get } from './accommodation-data';

class App extends Component {
  render() {
    const accommodationData = get();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AccommodationList accommodationData={accommodationData} />
      </div>
    );
  }
}

export default App;

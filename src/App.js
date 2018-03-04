import React, { Component } from 'react';
import './App.css';
import AccommodationList from './AccommodationList';
import { get } from './accommodation-data';

class App extends Component {
  render() {
    const accommodationData = get();

    return (
      <div className="App">
        <AccommodationList accommodationData={accommodationData} />
      </div>
    );
  }
}

export default App;

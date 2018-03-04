import React, { Component } from 'react';
import './App.css';
import AccommodationList from './AccommodationList';
import { getAccommodation } from './accommodation-data';

class App extends Component {
  render() {
    const accommodationData = getAccommodation();

    return (
      <div className="App">
        <h1>Accommodation Listings</h1>
        <AccommodationList accommodationData={accommodationData} />
      </div>
    );
  }
}

export default App;

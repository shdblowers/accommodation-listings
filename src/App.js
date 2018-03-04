import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import AccommodationList from './AccommodationList';
import { getAccommodation, searchAccommodation } from './accommodation-data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchName: '',
      accommodationData: getAccommodation(),
    };
  }

  search = event => {
    const searchValue = event.target.value;
    const accommodationData = searchAccommodation(searchValue);
    this.setState({
      searchName: searchValue,
      accommodationData: accommodationData,
    });
  };

  render() {
    return (
      <div>
        <SearchBar name={this.state.searchName} search={this.search} />
        <div className="App">
          <h1>Accommodation Listings</h1>
          <AccommodationList accommodationData={this.state.accommodationData} />
        </div>
      </div>
    );
  }
}

export default App;

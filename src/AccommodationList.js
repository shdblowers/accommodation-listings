import React, { Component } from 'react';
import Accommodation from './Accommodation';

class AccommodationList extends Component {
  render() {
    const { accommodationData } = this.props;

    return (
      <div>
        {accommodationData.map(accommodation => (
          <Accommodation
            key={accommodation['@id']}
            accommodation={accommodation}
          />
        ))}
      </div>
    );
  }
}

export default AccommodationList;

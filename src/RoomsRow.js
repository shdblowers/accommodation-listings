import React, { Component } from 'react';
import { get } from 'lodash';
import { getRoomAvailability } from './accommodation-data';
import { renderHTML } from './common';

class RoomsTable extends Component {
  render() {
    const { room } = this.props;

    const facilities = room.facilities
      ? room.facilities.map(facility => facility.label).join(', ')
      : '';

    const price = get(room, 'supplement_price.price.price', '£?');

    const available = getRoomAvailability(room['@id']);

    return (
      <tr>
        <td>{room.name}</td>
        <td>{room.room_type_description}</td>
        <td>
          {room['@min_occupancy']} / {room['@occupancy']}
        </td>
        <td>{renderHTML(room.description)}</td>
        <td>{facilities}</td>
        <td>{price}</td>
        <td>{available > 0 ? available : 'Sold Out'}</td>
      </tr>
    );
  }
}

export default RoomsTable;

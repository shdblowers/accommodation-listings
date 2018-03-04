import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { get } from 'lodash';
import { getRoomAvailability } from './accommodation-data';
import { renderHTML } from './common';

class RoomsTable extends Component {
  render() {
    const { rooms } = this.props;

    const roomRows = rooms.map((room, index) => {
      const facilities = room.facilities
        ? room.facilities.map(facility => facility.label).join(', ')
        : '';

      const price = get(room, 'supplement_price.price.price', '£?');

      const available = getRoomAvailability(room['@id']);

      return (
        <tr key={index}>
          <td>{room.name}</td>
          <td>{room.room_type_description}</td>
          <td>
            {room['@min_occupancy']} / {room['@occupancy']}
          </td>
          <td>{renderHTML(room.description)}</td>
          <td>{facilities}</td>
          <td>{price}</td>
          <td>{available}</td>
        </tr>
      );
    });

    return (
      <Table bordered hover>
        <thead>
          <tr>
            <th className="text-center">Name</th>
            <th className="text-center">Type</th>
            <th className="text-center">Min / Max Occupancy</th>
            <th className="text-center">Description</th>
            <th className="text-center">Facilities</th>
            <th className="text-center">Price</th>
            <th className="text-center">Number Available</th>
          </tr>
        </thead>
        <tbody>{roomRows}</tbody>
      </Table>
    );
  }
}

export default RoomsTable;

import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import RoomsRow from './RoomsRow';

class RoomsTable extends Component {
  render() {
    const { rooms } = this.props;

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
        <tbody>
          {rooms.map(room => <RoomsRow key={room['@id']} room={room} />)}
        </tbody>
      </Table>
    );
  }
}

export default RoomsTable;

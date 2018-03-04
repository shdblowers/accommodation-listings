import React, { Component } from 'react';
import { Panel, Row, Col, Button, Collapse } from 'react-bootstrap';
import RoomsTable from './RoomsTable';
import { renderHTML } from './common';
import './Accommodation.css';

class Accommodation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewRooms: false,
    };
  }

  render() {
    const { accommodation } = this.props;

    const facilities = accommodation.facilities.map((facility, index) => (
      <li key={index}>{facility.label}</li>
    ));

    return (
      <Panel bsStyle="primary" className="accommodationPanel">
        <Panel.Heading>
          <Panel.Title componentClass="h2">
            {accommodation.name} -- {accommodation.type.name}
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Row className="panelRow">
            <Col xs={12} md={6}>
              {renderHTML(accommodation.description)}
            </Col>
            <Col xs={12} md={6}>
              <h4>Facilities</h4>
              <ul className="facilitiesList text-left">{facilities}</ul>
            </Col>
          </Row>
          <Row className="panelRow">
            <Button
              bsStyle={this.state.viewRooms ? 'danger' : 'success'}
              block
              onClick={() =>
                this.setState({ viewRooms: !this.state.viewRooms })
              }
            >
              {this.state.viewRooms ? 'Hide Rooms' : 'Show Rooms'}
            </Button>
          </Row>
          <Row className="panelRow">
            <Collapse in={this.state.viewRooms}>
              <div>
                <RoomsTable rooms={accommodation.rooms} />
              </div>
            </Collapse>
          </Row>
        </Panel.Body>
      </Panel>
    );
  }
}

export default Accommodation;

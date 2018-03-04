import React, { Component } from 'react';
import { Panel, Row, Col, Button, Collapse } from 'react-bootstrap';
import RoomsTable from './RoomsTable';
import './Accommodation.css';

const renderHTML = rawHTML =>
  React.createElement('div', { dangerouslySetInnerHTML: { __html: rawHTML } });

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
      <Col key={index} xs={4}>
        <Panel>{facility.label}</Panel>
      </Col>
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
            <Col xs={6}>{renderHTML(accommodation.description)}</Col>
            <Col xs={6}>
              <Row>{facilities}</Row>
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

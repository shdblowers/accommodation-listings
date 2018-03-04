import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl } from 'react-bootstrap';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Form className="fullWidth">
          <FormGroup className="fullWidth">
            <FormControl
              className="fullWidth"
              type="text"
              placeholder="Search Name"
              value={this.props.name}
              onChange={this.props.search}
            />
          </FormGroup>
        </Navbar.Form>
      </Navbar>
    );
  }
}

export default SearchBar;

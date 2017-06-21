import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import styles from './Styles.js';

export default class MyNav extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
    };
  }
  
  render() {
    return(
      <Navbar style={styles.myNav} inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#" style={styles.logo}>Come-Memorate</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem style={styles.myNavText} eventKey={1} href="#">Link</NavItem>
          <NavItem style={styles.myNavText} eventKey={2} href="#">Link</NavItem>
          <NavDropdown style={styles.myNavText} eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem style={styles.myNavText} eventKey={3.1}>Action</MenuItem>
            <MenuItem style={styles.myNavText} eventKey={3.2}>Another action</MenuItem>
            <MenuItem style={styles.myNavText} eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem style={styles.myNavText} eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem style={styles.myNavText} eventKey={1} href="#">Link Right</NavItem>
          <NavItem style={styles.myNavText} eventKey={2} href="#">Link Right</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}
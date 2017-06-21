import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, 
        MenuItem, Panel, Button, ProgressBar } from 'react-bootstrap';
import styles from './Styles.js';

export default class FootPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div>
        <Navbar style={styles.footNav} fixedBottom>
          <Nav>
            
          </Nav>
          <Nav pullRight>
            <NavItem>
              <Button bsStyle="primary" 
                onClick={ ()=> this.setState({ open: !this.state.open })}>
                BUTTON
              </Button>
            </NavItem>
          </Nav>
        </Navbar>
        
        <Panel style={styles.footPanel} collapsible expanded={this.state.open}>
          This is some text about donating
          <ProgressBar style={{width: '75%',marginLeft: '10%',marginRight: '10%',}} bsStyle="success" now={40} />
          <br/>
          <br/>
          <br/>
        </Panel>
      </div>
    );
  }
}

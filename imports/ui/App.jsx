import React, { Component } from 'react';
import MyNav from './MyNav.jsx';
import FootPanel from './FootPanel.jsx';
import styles from './Styles.js';
import { Jumbotron } from 'react-bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
    };
  }
  
  render() {
    return (
      <div>
        <div style={styles.appBackground}>
          <MyNav></MyNav>
          <div style={styles.appBody}>
            <Jumbotron style={styles.homeJumbo}>
              <h1>In fleeting moments...</h1>
              <p>Life happens. In lasting memories, life remains.</p>
            </Jumbotron>
          </div>
          <FootPanel></FootPanel>
        </div>
      </div>
    );
  }
}
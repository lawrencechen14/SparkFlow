import React, { Component } from 'react';
import logo from './spark.png';
import './App.css';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import TimerContainer from './Timer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <img src={logo} className="App-logo" alt="logo" />
              <Navbar.Brand>
                <a href="/">SparkFlow</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
            <TimerContainer />
          </Grid>
        </Jumbotron>
        <Grid>
          <h1>Calendar</h1>
          <h1>Focus</h1>
          <h1>Stats</h1>
        </Grid>
      </div>
    );
  }
}

export default App;

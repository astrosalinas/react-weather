import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

import './App.css'

const cities = [
  'Ciudad del Este, py',
  'Asunción, py',
  'Caacupe, py',
  'Coronel Oviedo, py'
];

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid >
          <Row>
            <Col xs={12}>
              <AppBar title="Weather App" />
            </ Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer cities={cities}></LocationListContainer>
            </ Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                  <ForecastExtendedContainer></ForecastExtendedContainer> :
                  <h1>No se ha seleccionado Ciudad</h1>  
                </div>
              </Paper>
            </ Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
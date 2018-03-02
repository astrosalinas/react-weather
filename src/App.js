import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Ciudad del Este, py',
  'Asunción, py',
  'Caacupe, py',
  'Coronel Oviedo, py'
];

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  }
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
              <LocationList cities={cities}
              onSelectedLocation={this.handleSelectedLocation}></LocationList>
            </ Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                  <ForecastExtended></ForecastExtended>
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

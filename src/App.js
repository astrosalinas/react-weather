import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Ciudad del Este, py',
  'Asunción, py',
  'Caacupe, py',
  'Coronel Oviedo, py'
];

class App extends Component {
  handleSelectionLocation = city => {
    console.log("handleSelectionLocation");
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities={cities}
            onSelectedLocation={this.handleSelectionLocation}></LocationList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

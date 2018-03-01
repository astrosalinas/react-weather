import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WeatherLocation from './components/WeatherLocation/';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <WeatherLocation></WeatherLocation>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

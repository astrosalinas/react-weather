import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData/';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const api_key = "43f3457cd7c09b1bddcd95637fd2f142";
const url = "http://api.openweathermap.org/data/2.5/weather";




class WeatherLocation extends Component{
    //se ejecuta primero solo una vez
    constructor({ city }) {
        super();
        this.state = {
            data: null,
            city
        };
    }
   
    //se ejecuta segundo solo una vez
    componentWillMount() {
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`;
        fetch(api_weather).then(data => {
            return data.json();
        }).then(weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data });
        });
    }
    
    render = () => {
        const { city, data } = this.state;
        return (
            <div className="weatherLocation">
                <Location city={city}/>
                {data ? <WeatherData data={data} /> : <CircularProgress size={60} thickness={7} />}
            </div>
        );
    };
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired
}

export default WeatherLocation;
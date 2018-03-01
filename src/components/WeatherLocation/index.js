import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData/';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const location = "Ciudad del Este,py";
const api_key = "43f3457cd7c09b1bddcd95637fd2f142";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`



class WeatherLocation extends Component{
    //se ejecuta primero solo una vez
    constructor() {
        super();
        this.state = {
            data: null,
            city: 'Ciudad del Este'
        };
    }
   

    hadleUpdateClick = () => {
        fetch(api_weather).then( data => {
            return data.json();
        }).then ( weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data });
        });
    }
    //se ejecuta segundo solo una vez
    componentWillMount() {
        this.hadleUpdateClick();
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

export default WeatherLocation;
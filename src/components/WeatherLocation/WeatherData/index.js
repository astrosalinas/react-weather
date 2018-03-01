import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtrainfo';
import './styles.css';

const WeatherData = ({ data }) => {
    const { temperature, WeatherState, humidity, wind } = data;
    return (
        <div className="weatherDataCont">
            <WeatherTemperature temperature={temperature} WeatherState={WeatherState}/>
            <WeatherExtraInfo humidity={humidity} wind={wind}/>
        </div>
    );
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        WeatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherData;
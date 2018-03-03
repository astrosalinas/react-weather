import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

const api_key = "43f3457cd7c09b1bddcd95637fd2f142";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
    
    constructor() {
        super();
        this.state = { forecastData : null }
    }

    updateCity = city => {
        //fetch o axios
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`
        fetch(url_forecast).then( //obtiene la info que viene del server
            data => (data.json()) // data.json obtiene el objeto ya ejor formado
        ).then(
            weather_data => { //obtiene el weather data que es un objeto del objeto data.json
                const forecastData = transformForecast(weather_data);
                this.setState({ forecastData });
            }
        );
    }
    componentDidMount(){
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        // si en las propiedades actualizadas(nextProps.city)
        // es la isma que tenemos ahora establecida (this.props.city)
        if (nextProps.city !== this.props.city) { // si es diferente
            this.setState({ forecastData: null });
            this.updateCity(this.props.city); //actualizamos
       }
    }
    

    renderForecastItemDays(forecastData) {
        return forecastData.map( forecast => (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}>
            </ForecastItem>
        ));
    }

    renderProgress = () => {
        return <h3>Cargando Pronóstico Extendido...</h3>;
    }
    
    render(){
        const {city} = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecast-title">Pronóstico para {city}</h2>
                {   forecastData ?
                    this.renderForecastItemDays(forecastData):
                    this.renderProgress()
                }       
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;
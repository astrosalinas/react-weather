import convert from 'convert-units';
import { SNOW } from './../constans/weathers';

const getTemp = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(0)); //se puede agregar .toFixed(2)
};

const getWeatherState = weather => {
    return SNOW;
}

const transformWeather = (weather_data) => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const WeatherState = getWeatherState(this.weather);
    const temperature = getTemp(temp);
    const data = {
        humidity,
        temperature,
        WeatherState,
        wind: `${speed} m/s`,
    }
    return data;
}

export default transformWeather;
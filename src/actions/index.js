import transformForecast from './../services/transformForecast';
import transformWeather from './../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';


//esto es una accion creator
const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const GetWeatherCity = payload => ({type: GET_WEATHER_CITY, payload });
const SetWeatherCity = payload => ({type: SET_WEATHER_CITY, payload });


const api_key = "43f3457cd7c09b1bddcd95637fd2f142";
const url = "http://api.openweathermap.org/data/2.5/forecast";
const url_weather = "http://api.openweathermap.org/data/2.5/weather";

//accion de fetch de updateCity
export const setSelectedCity = payload => {

    return ( dispatch, getState) => {
        //fetch o axios
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`

        //establece la ciudad actual, establece de forma asincrona en el estado
        // y a la vez activa en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;

        const now = new Date();

        if (date && (now - date) < 1* 60 * 3000){
            return;
        }

        return fetch(url_forecast).then( //obtiene la info que viene del server
            data => (data.json()) // data.json obtiene el objeto ya ejor formado
        ).then(
            weather_data => { //obtiene el weather data que es un objeto del objeto data.json
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                // modificar el estado con el resultado de la promise (fetch)
                dispatch(setForecastData({city: payload, forecastData}));
            }
        );
        
    };
};


export const setWeather = payload => {

    return dispatch => {
        payload.forEach( city => {

            dispatch(GetWeatherCity(city));

            const api_weather = `${url_weather}?q=${city}&appid=${api_key}`;

            fetch(api_weather).then(data => {
                return data.json();
            }).then(weather_data => {
                const weather = transformWeather(weather_data);

                dispatch(SetWeatherCity({ city, weather }));
            });
        });
        
    }
};
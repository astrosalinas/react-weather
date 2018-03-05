import transformForecast from "../services/transformForecast";

export const SET_CITY = 'SET_CITY';

const api_key = "43f3457cd7c09b1bddcd95637fd2f142";
const url = "http://api.openweathermap.org/data/2.5/forecast";

//esto es una accion creator
export const setCity = payload => ({ type: SET_CITY, payload });

//accion de fetch de updateCity
export const fetchForecast = payload => {

    return dispatch => {
        //fetch o axios
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`

        //activar en el estado un indicador de busqueda de datos

        fetch(url_forecast).then( //obtiene la info que viene del server
            data => (data.json()) // data.json obtiene el objeto ya ejor formado
        ).then(
            weather_data => { //obtiene el weather data que es un objeto del objeto data.json
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                // modificar el estado con el resultado de la promise (fetch)
            }
        );
        return;
    };
};

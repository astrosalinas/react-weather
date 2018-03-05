import React, { Component } from 'react';
//esto es opcional
import { bindActionCreators } from 'redux';
//la linea de arriba
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//esto se usa con la linea opcional de arriba antes
//import { setSelectedCity, setWeather } from './../actions';
import * as actions from './../actions';
//aqui termina
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    componentDidMount() {
        const { setWeather, setSelectedCity, cities, city } = this.props;
        setWeather(cities)
        setSelectedCity(city);
    }
    

    handleSelectedLocation = city => { 
        this.props.setSelectedCity(city);
    }
    
    render() {
        return( 
            <LocationList cities={this.props.citiesWeather}
            onSelectedLocation={this.handleSelectedLocation}></LocationList>
        );
    }
}


LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
  }

//actions creators
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
/*
const mapDispatchToProps = dispatch => ({
    setCisetSelectedCityty: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
});
*/
const mapStateToProps= state => ({ 
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
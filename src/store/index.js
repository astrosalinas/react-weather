import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { city } from './../reducers/city';

const initialState= {
    city: 'Ciudad del Este,py'
};

const composeEnhancers = window.__REDUX_DEV_TOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(city, initialState, composeEnhancers(applyMiddleware(thunk)));

//si no usaramos la app redux en el navegador quedaria asi
//export const store = createStore(city, initialState, applyMiddleware(thunk));
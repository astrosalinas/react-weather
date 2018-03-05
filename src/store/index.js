import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers/';

const initialState= {
    city: 'Ciudad del Este,py'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));

//si no usaramos la app redux en el navegador quedaria asi
//export const store = createStore(city, initialState, applyMiddleware(thunk));
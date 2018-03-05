import { SET_CITY } from './../actions';

// hay que tratar de usar solo un reducer
//si viene vacio el state se le asigna por defecto
export const city = (state = {}, action) => {
    switch (action.type){
        case SET_CITY:
            // se desglosa el state y si existe la propiedad city 
            // se medifica el valor por lo que nos viene en action.payload
            // si no existe se agrega al state
            return action.payload ;
        default:
            return state;
    }
}
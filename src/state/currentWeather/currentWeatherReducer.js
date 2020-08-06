import {
    GET_CURRENT_WEATHER, 
    GET_CURRENT_WEATHER_SUCCESS, 
    GET_CURRENT_WEATHER_FAIL
} from '..//..//core/constants';

const initialState = {
    loading: true,
    currentData: {},
    error: null
}

export default function currentWeather(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENT_WEATHER: 
            return {
                ...state,
                loading: true
            };
        case GET_CURRENT_WEATHER_SUCCESS: 
            return {
                ...state,
                loading: false,
                currentData: action.payload,
            };
        case GET_CURRENT_WEATHER_FAIL: 
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}
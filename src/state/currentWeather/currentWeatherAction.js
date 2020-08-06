import {
    GET_CURRENT_WEATHER, 
    GET_CURRENT_WEATHER_SUCCESS, 
    GET_CURRENT_WEATHER_FAIL
} from '..//..//core/constants';

export function getCurrentWeather() {
    return {
        type: GET_CURRENT_WEATHER,
    };
}

export function getCurrentWeatherSuccess(data) {
    return {
        type: GET_CURRENT_WEATHER_SUCCESS,
        payload: data
    };
}

export function getCurrentWeatherFail(error) {
    return {
        type: GET_CURRENT_WEATHER_FAIL,
        payload: error
    };
}
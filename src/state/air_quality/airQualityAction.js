import {
    GET_AIR_QUALITY,
    GET_AIR_QUALITY_SUCCESS,
    GET_AIR_QUALITY_FAIL
} from '..//..//core/constants';

export function getAirQuality() {
    return {
        type: GET_AIR_QUALITY,
    };
}

export function getAirQualitySuccess(data) {
    return {
        type: GET_AIR_QUALITY_SUCCESS,
        payload: data
    };
}

export function getAirQualityFail(error) {
    return {
        type: GET_AIR_QUALITY_FAIL,
        payload: error
    };
}
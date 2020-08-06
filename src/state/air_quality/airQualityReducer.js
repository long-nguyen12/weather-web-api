import {
    GET_AIR_QUALITY,
    GET_AIR_QUALITY_SUCCESS,
    GET_AIR_QUALITY_FAIL
} from '..//..//core/constants';

const initialState = {
    loading: true,
    currentData: {},
    error: null
}

export default function airQuality(state = initialState, action) {
    switch (action.type) {
        case GET_AIR_QUALITY: 
            return {
                ...state,
                loading: true
            };
        case GET_AIR_QUALITY_SUCCESS: 
            return {
                ...state,
                loading: false,
                currentData: action.payload,
            };
        case GET_AIR_QUALITY_FAIL: 
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}
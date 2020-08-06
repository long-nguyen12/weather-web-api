import {
    GET_NEWS, 
    GET_NEWS_SUCCESS, 
    GET_NEWS_FAIL
} from '../../core/constants';

const initialState = {
    loading: true,
    currentData: {},
    error: null
}

export default function newsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NEWS: 
            return {
                ...state,
                loading: true
            };
        case GET_NEWS_SUCCESS: 
            return {
                ...state,
                loading: false,
                currentData: action.payload,
            };
        case GET_NEWS_FAIL: 
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}
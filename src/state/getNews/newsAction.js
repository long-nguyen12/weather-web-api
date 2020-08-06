import {
    GET_NEWS, 
    GET_NEWS_SUCCESS, 
    GET_NEWS_FAIL
} from '..//..//core/constants';

export function getNews() {
    return {
        type: GET_NEWS,
    };
}

export function getNewsSuccess(data) {
    return {
        type: GET_NEWS_SUCCESS,
        payload: data
    };
}

export function getNewsFail(error) {
    return {
        type: GET_NEWS_FAIL,
        payload: error
    };
}
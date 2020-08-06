import {
    SEARCH_ACTION
} from '..//..//core/constants';

export function searchAction(city) {
    return {
        type: SEARCH_ACTION,
        payload: city
    }
}
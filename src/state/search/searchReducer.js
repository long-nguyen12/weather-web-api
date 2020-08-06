import {
    SEARCH_ACTION
} from '..//..//core/constants';

const initialState = {
    city: ''
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_ACTION:
            return {
                ...state,
                city: action.payload
            };
    
        default:
            return state;
    }
}

export default searchReducer;
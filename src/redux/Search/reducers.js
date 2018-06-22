import { combineReducers } from 'redux';

const initialState = [];

const search = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_REQUEST':
            return { ...state, isFetching: true }
        case 'SEARCH_SUCCESS':
            return { response: action.response, isFetching: false }
        case 'SEARCH_ERROR':
            return { ...state, isFetching: false }
        default:
            return state
    }
}

export const reducer = combineReducers({
    search: search
});

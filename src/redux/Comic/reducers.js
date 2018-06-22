import { combineReducers } from 'redux';

const initialState = [];

const loadComic = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_COMIC_REQUEST':
            return { ...state, isFetching: true }
        case 'LOAD_COMIC_SUCCESS':
            return { response: action.response, isFetching: false }
        case 'LOAD_COMIC_ERROR':
            return { ...state, isFetching: false }
        default:
            return state
    }
}

const listComic = (state = initialState, action) => {
    switch (action.type) {
        case 'LIST_COMIC_REQUEST':
            return { ...state, isFetching: true }
        case 'LIST_COMIC_SUCCESS':
            return { response: action.response, isFetching: false }
        case 'LIST_COMIC_ERROR':
            return { ...state, isFetching: false }
        default:
            return state
    }
}

export const reducer = combineReducers({
    list: listComic,
    comic: loadComic
});

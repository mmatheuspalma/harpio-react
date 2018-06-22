export const searchRequest = () => {
    return {
        type: 'SEARCH_REQUEST'
    }
}

export const searchError = () => {
    return {
        type: 'SEARCH_ERROR'
    }
}

export const searchSuccess = (response) => {
    return {
        type: 'SEARCH_SUCCESS',
        response
    }
}

export const search = (search) => {
    return (dispatch) => {
        dispatch(searchRequest())
        dispatch(searchSuccess(search))
    }
}
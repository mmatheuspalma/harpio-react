import ComicService from './services';

export const loadComicRequest = () => {
    return { type: 'LOAD_COMIC_REQUEST' } 
}

export const loadComicError = () => {
    return { type: 'LOAD_COMIC_ERROR' } 
}

export const loadComicSuccess = (response) => {
    return { type: 'LOAD_COMIC_SUCCESS', response } 
}

export const listComicRequest = () => {
    return { type: 'LIST_COMIC_REQUEST' } 
}

export const listComicError = () => {
    return { type: 'LIST_COMIC_ERROR' } 
}

export const listComicSuccess = (response) => {
    return { type: 'LIST_COMIC_SUCCESS', response } 
}

export const listComic = params => {
    return (dispatch) => {
        dispatch(listComicRequest())

        return ComicService.comics(params).then(response => {
            (response && response.statusText === 'OK') ? dispatch(listComicSuccess(response.data)) : dispatch(listComicError())
        }).catch(error => {
            throw error
        })
    }
}

export const loadComic = id => {
    return (dispatch) => {
        dispatch(loadComicRequest())

        return ComicService.comicById(id).then(response => {
            (response && response.statusText === 'OK') ? dispatch(loadComicSuccess(response.data)) : dispatch(loadComicError())
        }).catch(error => {
            throw error
        })
    }
}
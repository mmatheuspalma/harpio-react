import axios from 'axios';

import routes from './../../helpers/routes';

const comics = params => {
    return axios({
        method: 'GET',
        url: routes.comic.api,
        timeout: 3000,
        params: params
    });
}

const comicById = id => {
    return axios({
        method: 'GET',
        url: `${routes.comic.api}/${id}`,
        timeout: 3000
    });
}

export default {
    comics,
    comicById
}
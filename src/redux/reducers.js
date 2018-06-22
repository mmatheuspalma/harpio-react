import { combineReducers } from 'redux'

import { reducer as Comic } from './Comic/reducers';
import { reducer as Search } from './Search/reducers';

const reducers = combineReducers({
    Comic,
    Search
});

export default reducers;
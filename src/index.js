import React from 'react';
import { render } from 'react-dom';

import store from './store';
import Routes from './scenes/routes';

import registerServiceWorker from './registerServiceWorker';

render(
    <Routes store={store}/>, document.getElementById('root')
);
registerServiceWorker();
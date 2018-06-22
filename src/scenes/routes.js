import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './../history';

import Comics from './Comics';
import Comic from './Comics/scenes/Comic';
import NotFound from './NotFound';
import ScrollToTop from './../components/ScrollToTop';

import routeMap from './../helpers/routes';

export default class Routes extends Component {
    render() {
        const { props } = this;

        return (
            <Router history={history}>
                <ScrollToTop>
                    <div className="app">
                        <Switch>
                            <Route exact path={routeMap.comic.internal.route} key="comic-internal" render={(props) => <Comic {...this.props} {...props} />} />
                            <Route path={routeMap.comic.list.route} key="comic-list" render={(props) => <Comics {...this.props} {...props} />} />
                            <Route render={() => <NotFound {...props} />} />
                        </Switch>
                    </div>
                </ScrollToTop>
            </Router>
        )
    }
}
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as RoutesPath from '../constants/routes-path';

import HomePage from '../pages/Home';
import ExamplePage from '../pages/Example';

import Initialize from './Initialize';
import Analytics from './Analytics';

const Routes = () => (
    <BrowserRouter>
        <Initialize />
        <Analytics>
            <Switch>
                <Route exact path={RoutesPath.home.path} component={HomePage} />
                <Route
                    exact
                    path={RoutesPath.example_page.path}
                    component={ExamplePage}
                />
            </Switch>
        </Analytics>
    </BrowserRouter>
);

export default Routes;

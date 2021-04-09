import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as RoutesPath from '../config/constants/routes-path';

import HomePage from '../pages/Home';

import Analytics from './Analytics';

const Routes = () => (
    <BrowserRouter>
        <Analytics>
            <Switch>
                <Route exact path={RoutesPath.home.path} component={HomePage} />
            </Switch>
        </Analytics>
    </BrowserRouter>
);

export default Routes;

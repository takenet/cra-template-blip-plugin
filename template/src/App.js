import React from 'react';
import Provider from './store';
import Routes from './routes';
import { load, identify } from './services/analytics';
import { showToast } from './services/common-service';
import * as BlipPortalToastTypes from './constants/blip-portal-toast-types';

const App = () => {
    // segment analytics
    load();
    identify();

    showToast({
        type: BlipPortalToastTypes.success,
        message: 'Carregado com sucesso'
    });

    return (
        <Provider>
            <Routes />
        </Provider>
    );
};

export default App;

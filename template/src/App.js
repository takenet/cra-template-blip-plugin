import React from 'react';
import Provider from './store';
import Routes from './routes';

const App = () => (
    <Provider>
        <Routes />
    </Provider>
);

export default App;

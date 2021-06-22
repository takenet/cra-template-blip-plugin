/* eslint-disable */
import production from './appsettings.json';

let settings = {};

try {
    const dev = require('./appsettings.development.json');
    settings = process.env.NODE_ENV !== 'development' ? production : dev;
} catch {
    settings = production;
}

export default settings;

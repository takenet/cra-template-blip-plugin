/* eslint-disable */
/**
 * CHARTS
 */
const CHARTS_LOOK_UP_PATH = './charts/**/*';
const CURRENT_CHARTS_NAME = 'PLUGIN_NAME';
const REGEX_CHARTS = new RegExp(`${CURRENT_CHARTS_NAME}`, 'g');

const CHARTS_CURRENT_PATH = `./charts/${CURRENT_CHARTS_NAME}`;
const CHARTS_NEW_PATH = `./charts/${process.env.REACT_APP_NAME}`;

/**
 * APP SETTINGS
 */
const CONFIG_PATH = './src/config';
const APP_SETTINGS_FILE = `${CONFIG_PATH}/appsettings.json`;
const DEV_APP_SETTINGS_FILE = `${CONFIG_PATH}/appsettings.development.json`;

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (error) => {
    throw error;
});

const fs = require('fs');

// rename charts folder
try {
    fs.renameSync(CHARTS_CURRENT_PATH, CHARTS_NEW_PATH);
    console.log('Directory renamed.');
} catch (error) {
    console.error(error);
    process.exit(1);
}

// replace inside the charts files
const replace = require('replace-in-file');

const options = {
    files: CHARTS_LOOK_UP_PATH,
    from: REGEX_CHARTS,
    to: process.env.REACT_APP_NAME
};

try {
    const results = replace.sync(options);
    console.log(`Replaced ${results.length} file(s).`);
} catch (error) {
    console.error(error);
    process.exit(1);
}

// copy appsetting to development config file
try {
    fs.copyFileSync(APP_SETTINGS_FILE, DEV_APP_SETTINGS_FILE);
    console.log('Development appsettings created.');
} catch (error) {
    console.error(error);
    process.exit(1);
}

process.exit();

/* eslint-disable */
/**
 * CHARTS
 */
const charts_look_up_path = './charts/**/*';
const current_charts_name = 'PLUGIN_NAME';
const regex_charts = new RegExp(`${current_charts_name}`, 'g');

const charts_current_path = `./charts/${current_charts_name}`;
const charts_new_path = `./charts/${process.env.REACT_APP_NAME}`;

/**
 * APP SETTINGS
 */
const config_path = './src/config';
const app_settings_file = `${config_path}/appsettings.json`;
const dev_app_settings_file = `${config_path}/appsettings.development.json`;

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (error) => {
    throw error;
});

const fs = require('fs');

// rename charts folder
try {
    fs.renameSync(charts_current_path, charts_new_path);
    console.log('Directory renamed.');
} catch (error) {
    console.error(error);
    process.exit(1);
}

// replace inside the charts files
const replace = require('replace-in-file');

const options = {
    files: charts_look_up_path,
    from: regex_charts,
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
    fs.copyFileSync(app_settings_file, dev_app_settings_file);
    console.log('Development appsettings created.');
} catch (error) {
    console.error(error);
    process.exit(1);
}

process.exit();

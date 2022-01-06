/* eslint-disable */
const fs = require('fs');
const replace = require('replace-in-file');

const CURRENT_NAME = !!process.argv[3] ? process.argv[3] : 'PLUGIN_NAME';
const NEW_NAME = !!process.argv[2]
	? process.argv[2]
	: process.env.REACT_APP_NAME;

/**
 * CHARTS
 * rename charts folder
 * deep renaming (charts path files)
 */
function deepChartsRename() {
	const chartsPath = './charts/**/*';
	const chartsRegex = new RegExp(`${CURRENT_NAME}`, 'g');

	const options = {
		files: chartsPath,
		from: chartsRegex,
		to: NEW_NAME
	};

	try {
		const results = replace.sync(options);
		console.log(`Replaced ${results.length} file(s).`);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}

// rename charts folder
function chartsRename() {
	const currentPath = `./charts/${CURRENT_NAME}`;
	const newPath = `./charts/${NEW_NAME}`;

	try {
		if (fs.existsSync(currentPath)) {
			// path exists, then rename
			fs.renameSync(currentPath, newPath);
			console.log('Directory renamed.');

			// deep rename
			deepChartsRename();
		} else {
			console.warn('Warning: Charts path not fount.');
		}
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}

/**
 * APP SETTINGS
 * create an appsettings copy to development.appsettings file
 */
function copyAppSetting() {
	const configPath = './src/config';
	const appSettingsFile = `${configPath}/appsettings.json`;
	const devAppSettingsFile = `${configPath}/appsettings.development.json`;

	try {
		if (!fs.existsSync(devAppSettingsFile)) {
			// file not exists, then create one
			fs.copyFileSync(appSettingsFile, devAppSettingsFile);
			console.log('Development appsettings file created.');
		} else {
			console.warn(
				'Warning: Development appsettings file already exists.'
			);
		}
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}

/**
 * Sonar SETTINGS
 * configure some sonar exclusions paths
 */
function sonarProperties() {
	const sonarPropertiesFile = 'sonar-project.properties';
	const exclusions = [
		'**/__mocks__/**',
		'**/src/assets/**',
		'**/src/config/**',
		'**/src/constants/**',
		'**/src/translate/**'
	];

	try {
		if (!fs.existsSync(`./${sonarPropertiesFile}`)) {
			// file not exists, then create one
			const file = fs.openSync(sonarPropertiesFile, 'a');
			// include the properties
			fs.appendFileSync(file, `sonar.projectKey=${NEW_NAME} \r\n`);
			fs.appendFileSync(file, `sonar.projectName=${NEW_NAME} \r\n \r\n`);
			fs.appendFileSync(file, `sonar.exclusions=${exclusions.join(',')}`);

			console.log('Sonar properties file created.');
		} else {
			console.warn('Warning: Sonar properties file already exists.');
		}
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}

// deep renaming (charts path and files)
chartsRename();

// create development.appsettings file
copyAppSetting();

// create sonar-project.properties file
sonarProperties();

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (error) => {
	throw error;
});

process.exit();

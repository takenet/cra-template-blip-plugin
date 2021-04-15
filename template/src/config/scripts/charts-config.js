const path_to_look_up = './charts/**/*';
const name_to_change = 'PLUGIN_NAME';
const regex = new RegExp(`${name_to_change}`, 'g');

const current_path = `./charts/${name_to_change}`;
const new_path = `./charts/${process.env.REACT_APP_NAME}`;

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (error) => {
    throw error;
});

// rename folder
const fs = require('fs');

try {
    fs.renameSync(current_path, new_path);
    console.log('Directory renamed.');
} catch (error) {
    console.error(error);
    process.exit(1);
}

// replace inside the files
const replace = require('replace-in-file');

const options = {
    files: path_to_look_up,
    from: regex,
    to: process.env.REACT_APP_NAME
};

try {
    const results = replace.sync(options);
    console.log(`Replaced ${results.length} file(s).`);
} catch (error) {
    console.error(error);
    process.exit(1);
}

process.exit();

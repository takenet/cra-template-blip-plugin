# BLiP plugin template

[![NPM Version][npm-badge]][npm-url]
[![Downloads][npm-downloads-badge]][npm-downloads-url]
[![License][license-badge]][license-url]

BLiP plugin it's a technology-agnostic way to plug unnoficial features to enhance the portal capabilities.

This project aims to give the initial skill needed to develop and build your own plugins.

## File Structure

Assuming your folder is called `blip-plugin-project`.
Whatever name you choose will replace all occurrences of that string in the project

```json
📁blip-plugin-project
├───📁charts
│   └───📁blip-plugin-project
│       ├───📁templates
│       │   ├───_helpers.tpl
│       │   ├───autoscale.yaml
│       │   ├───deployment.yaml
│       │   ├───ingress.yaml
│       │   ├───NOTES.txt
│       │   ├───secrets.yaml
│       │   └───service.yaml
│       ├───.helmignore
│       ├───Chart.yaml
│       └───values.yaml
├───📁public
│   └───...
├───📁src
│   ├───📁assets
│   │   ├───📁images
│   │   │   └───...
│   │   └───📁styles
│   │        └───app.scss
│   ├───📁components
│   │   └───📁SomeComponent
│   │        ├───SomeComponent.js
│   │        └───index.js
│   ├───📁config
│   │   ├───📁jest
│   │   │   └───fileTransform.js
│   │   ├───📁scripts
│   │   │   └───plugin-config.js
│   │   ├───⚙️appsettings.json
│   │   └───index.js
│   ├───📁constants
│   │   ├───application-actions.js
│   │   └───...
│   ├───📁factory
│   │   └───api.js
│   ├───📁hooks
│   │   ├───store.js
│   │   ├───useCombinedReducers.js
│   │   └───useFetch.js
│   ├───📁pages
│   │   └───📁Home
│   │       ├───📁components
│   │       │   └───📁Header
│   │       │        ├───Header.jsx
│   │       │        └───index.js
│   │       ├───Home.js
│   │       └───index.js
│   ├───📁routes
│   │   ├───Analyticts.js
│   │   ├───index.js
│   │   └───Routes.js
│   ├───📁services
│   │   ├───application-service.js
│   │   └───...
│   ├───📁store
│   │   ├───📁actions
│   │   │   ├───application.js
│   │   │   └───...
│   │   ├───📁reducers
│   │   │   ├───application.js
│   │   │   └───...
│   │   ├───connect.js
│   │   └───index.js
│   ├───📁utils
│   │   └───...
│   ├───App.js
│   └───index.js
├───⚙️.env
├───⚙️.eslintignore
├───⚙️.eslintrc
├───⚙️.gitignore
├───⚙️.prettierrc
├───⚙️package.json
└───⚙️README.md
```

## Usage

```bash
npx create-react-app PROJECT_NAME --template blip-plugin

#or

yarn create-react-app PROJECT_NAME --template blip-plugin
```

> Note: `npx` command installs most recent stable version of CRA from npm. `--template` parameter points to this template, note that `cra-template-` prefix is omitted.

Access the project folder.

```bash
cd PROJECT_NAME
```

> Configure `./charts` according your project. Replace `PLUGIN_NAME` with the correct plugin name.

```bash
npm run config:plugin

#or

yarn config:plugin
```

Then, run the project.

```bash
npm start

#or

yarn start
```

Now just add the plugin to your chatbot and enjoy!

## More information

[Blip plugin template](https://github.com/axeldouglas/cra-template-blip-plugin/tree/main/template)

[npm-badge]: https://img.shields.io/npm/v/cra-template-blip-plugin.svg
[npm-url]: https://www.npmjs.com/package/cra-template-blip-plugin
[npm-downloads-badge]: https://img.shields.io/npm/dt/cra-template-blip-plugin.svg
[npm-downloads-url]: https://www.npmjs.com/package/cra-template-blip-plugin
[license-badge]: https://img.shields.io/github/license/axeldouglas/cra-template-blip-plugin.svg
[license-url]: https://opensource.org/licenses/MIT

# BLiP plugin template

[![NPM Version][npm-badge]][npm-url]
[![Downloads][npm-downloads-badge]][npm-downloads-url]
[![License][license-badge]][license-url]

BLiP plugin it's a technology-agnostic way to plug unnoficial features to enhance the portal capabilities.

This project aims to give the initial skill needed to develop and build your own plugins.

## Other templates

We have other templates available that you may want to to check:

- [cra-template-blip-plugin-context][plugin-context-api]

## File Structure

Assuming your folder is called `blip-plugin-project`.
Whatever name you choose will replace all occurrences of that string in the project

```json
πblip-plugin-project
ββββπcharts
β   ββββπblip-plugin-project
β       ββββπtemplates
β       β   ββββ_helpers.tpl
β       β   ββββautoscale.yaml
β       β   ββββdeployment.yaml
β       β   ββββingress.yaml
β       β   ββββNOTES.txt
β       β   ββββsecrets.yaml
β       β   ββββservice.yaml
β       ββββ.helmignore
β       ββββChart.yaml
β       ββββvalues.yaml
ββββπpublic
β   ββββ...
ββββπsrc
β   ββββπassets
β   β   ββββπimages
β   β   β   ββββ...
β   β   ββββπstyles
β   β        ββββapp.scss
β   ββββπcomponents
β   β   ββββπSomeComponent
β   β        ββββSomeComponent.js
β   β        ββββindex.js
β   ββββπconfig
β   β   ββββπjest
β   β   β   ββββfileTransform.js
β   β   ββββπscripts
β   β   β   ββββplugin-config.js
β   β   βββββοΈappsettings.json
β   β   ββββindex.js
β   ββββπconstants
β   β   ββββblip-portal-destinations.js
β   β   ββββ...
β   ββββπfactory
β   β   ββββapi.js
β   ββββπhooks
β   β   ββββuseFetch.js
β   ββββπpages
β   β   ββββπHome
β   β       ββββπcomponents
β   β       β   ββββπHeader
β   β       β        ββββHeader.jsx
β   β       β        ββββindex.js
β   β       ββββHome.js
β   β       ββββindex.js
β   ββββπroutes
β   β   ββββAnalyticts.js
β   β   ββββindex.js
β   β   ββββRoutes.js
β   ββββπservices
β   β   ββββapplication-service.js
β   β   ββββ...
β   ββββπutils
β   β   ββββ...
β   ββββApp.js
β   ββββindex.js
ββββπ³.dockerignore
βββββοΈ.env
βββββοΈ.eslintignore
βββββοΈ.eslintrc
βββββοΈ.gitignore
βββββοΈ.prettierrc
ββββπ³Dockerfile
ββββπLICENSE
βββββοΈpackage.json
βββββοΈREADME.md
```

## Usage

```bash
npx create-react-app PROJECT_NAME --template blip-plugin

#or

yarn create react-app PROJECT_NAME --template blip-plugin
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

[Blip plugin template](https://github.com/takenet/cra-template-blip-plugin/tree/main/template)

[npm-badge]: https://img.shields.io/npm/v/cra-template-blip-plugin.svg
[npm-url]: https://www.npmjs.com/package/cra-template-blip-plugin
[npm-downloads-badge]: https://img.shields.io/npm/dt/cra-template-blip-plugin.svg
[npm-downloads-url]: https://www.npmjs.com/package/cra-template-blip-plugin
[license-badge]: https://img.shields.io/github/license/takenet/cra-template-blip-plugin.svg
[license-url]: https://opensource.org/licenses/MIT
[plugin-context-api]: https://github.com/takenet/cra-template-blip-plugin-context

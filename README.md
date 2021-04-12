# BLiP plugin template

BLiP plugin it's a technology-agnostic way to plug unnoficial features to enhance the portal capabilities.

This project aims to give the initial skill needed to develop and build your own plugins.

## Usage

```bash
npx create-react-app PROJECT_NAME --template blip-plugin

#or

yarn create react-app PROJECT_NAME --template blip-plugin
```

> Note: `npx` command installs most recent stable version of CRA from npm. `--template` parameter points to this template, note that `cra-template-` prefix is omitted.

Then, access and run the project.

```bash
cd PROJECT_NAME
```
> Configure `./charts` according your plugin project. Replace `PLUGIN_NAME` with the correct plugin name.

```bash
npm start

#or

yarn start
```

Now just add the plugin to your chatbot and enjoy!

## More information

[blip](https://blip.ai) &nbsp;&nbsp; [blip-ds](https://github.com/takenet/blip-ds) &nbsp;&nbsp; [iframe-message](https://github.com/takenet/iframe-message-proxy)
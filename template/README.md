[![Blip-plugin](https://imgur.com/B8dPNgk.png "Blip-plugin")][blip]

# BLiP plugin

BLiP plugin it's a technology-agnostic way to plug unnoficial features to enhance the portal capabilities.

This project aims to give the initial skill needed to develop and build your own plugins.

## Getting started from sample

1. Create new plugin project

```bash
npx create-react-app PROJECT_NAME --template blip-plugin

# or

yarn create react-app PROJECT_NAME --template blip-plugin
```

> Note: `npx` command installs most recent stable version of CRA from npm. `--template` parameter points to this template, note that `cra-template-` prefix is omitted.

2. Access project folder:

```bash
cd PROJECT_NAME
```

3. Configure `./charts` according your plugin project:

```bash
npm run config:plugin

#or

yarn config:plugin

```
> Note: This will replace `PLUGIN_NAME` with the correct project name in the charts files.

4. Run the project:

```bash
npm start

#or

yarn start
```

5. Now just add the plugin to your chatbot and enjoy!

## Good to know

* All the communication between your plugin and portal should be made using the browser message API. We highly recommend you to use our official [package][iframe-message] which was been designed to that communication.
* We recomend you to create plugins with components and colors similar to our design system, we have a official [package][blip-toolkit] to help with that.
* After the first render of plugin, if the window size is too small, you will have to change it through the `HeightChange` message.
* We have some guidelines to create new pages, we recommend you to follow their(it's in portuguese):

![Page guidelines 1](https://i.imgur.com/0gEvaxT.png "Page guidelines 1")

![Page guidelines 2](https://i.imgur.com/gMfUMjG.png "Page guidelines 2")

![Page guidelines 3](https://i.imgur.com/QPil55Q.png "Page guidelines 3")

## Possible message types

**`SendCommand`**

Send a blip command. Destination defines the domain which it should send(`msging.net` or `blip.ai`), if you don't know which to choose, leave the default.
```
{
    command: Lime.Command,
    destination?: 'BlipService' | 'MessagingHubService',
    timeout?: number
}
```

**`StartLoading`**

Start a loading screen on portal.

**`StopLoading`**

Stop the loading screen.

**`HeightChange`**

Change the iframe height.

```
height: number
```

**`ShowModal`**

Show a modal to user.

```
{
    title: string,
    body: HTMLString,
    confirm: string,
    cancel: string
}
```

**`HideNavbar`**

Hide the navbar.

**`ShowNavbar`**

Shows the navbar.

**`GetCurrentLanguage`**

Get the user current language.

**`Toast`**

Create a toast.

```
{
    type: 'info' | 'success' | 'warning' | 'danger' | 'refresh',
    message: string
}
```

**`GetApplication`**

Get a application or the current application.

```
applicationId?: string
```

**`HasPermissions`**

Check if user has some permission.

```
{
    permissionType: string,
    customArea?: string,
    customShortName?: string
}
```

**`GetPermissionsObject`**

Get the entire permission object.

[blip]: https://blip.ai
[iframe-message]: https://github.com/takenet/iframe-message-proxy
[blip-toolkit]: https://www.npmjs.com/package/blip-toolkit
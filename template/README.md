# blip plugin

[![Blip-plugin](https://imgur.com/B8dPNgk.png "Blip-plugin")][blip]

BLiP plugin it's a technology-agnostic way to plug unnoficial features to enhance the portal capabilities.

This project aims to give the initial skill needed to develop and build your own plugins.

## Getting started from sample

### Access project folder

```bash
cd PROJECT_NAME
```

### Configure `charts` according your plugin project

```bash
yarn config:plugin
```

> Note: This will replace `PLUGIN_NAME` with the correct project name in the charts files and create the `appsettings.development.json` file.

### Run the project

```bash
yarn start

# or

npm start
```

### Now just add the plugin to your chatbot and enjoy

First, go to `settings`->`advanced settings`, look for the following configuration:

| Domain                    | Name    | Value         |
|---------------------------|---------|---------------|
| postmaster@portal.blip.ai | Plugins | `<Any Value>` |

If there's no such configuration you just need to create it as following:

| Domain                    | Name    | Value                                                                    |
|---------------------------|---------|--------------------------------------------------------------------------|
| postmaster@portal.blip.ai | Plugins | {"local": {"name": "Local Plugin 3000", "url": "http://localhost:3000"}} |

Otherwise, if there's already a `Plugins` configuration you just need to modify the value to add your local plugin. You may have a `Plugins` value such as this:

```json
{
  "some-random-id": {
    "name": "Some Random Plugin",
    "url": "https://some-random-plugin-url.com"
  }
}
```

Then you just need to append your plugin like:

```json
{
  "some-random-id": {
    "name": "Some Random Plugin",
    "url": "https://some-random-plugin-url.com"
  },
  "local": {
    "name": "Local Plugin 3000",
    "url": "http://localhost:3000"
  }
}
```

After setting up the plugin configuration, both new or modified, you must refresh your page and the plugin will be listed at the `...` on blip's bot navbar.

![blip plugin location](https://i.imgur.com/6q2IFxm.png)

## Good to know

- All the communication between your plugin and portal should be made using the browser message API. We highly recommend you to use our official [package][iframe-message] which was been designed to that communication.
- We recomend you to create plugins with components and colors similar to our design system, we have a official [package][blip-toolkit] to help with that.
- After the first render of plugin, if the window size is too small, you will have to change it through the `HeightChange` message.
- We have some guidelines to create new pages, we recommend you to follow their(it's in portuguese):

![Page guidelines 1](https://i.imgur.com/0gEvaxT.png "Page guidelines 1")

![Page guidelines 2](https://i.imgur.com/gMfUMjG.png "Page guidelines 2")

![Page guidelines 3](https://i.imgur.com/QPil55Q.png "Page guidelines 3")

## Possible message types

We've created constants to help you with the actions, take a look at the `constants` folder for the files:

- `blip-portal-destinations`
- `blip-portal-toast-types`
- `iframe-message-proxy-actions`
- `iframe-message-proxy-container` -> **this class holds every needed constant** to work with the iframe message proxy, so you can just import it instead of import every other `constant` file

The following messages will be sent to the `iframe-message-proxy` as this method shows, where `message` is the payload you need to send:

```js
import { IframeMessageProxy } from 'iframe-message-proxy';

const sendMessageAndGetResponseAsync = async (message) => {
    const { response } = await IframeMessageProxy.sendMessage(message);
    return response;
};
```

**`SendCommand`**

Send a blip command. Destination defines the domain which it should send(`msging.net` or `blip.ai`), if you don't know which to choose, leave the default.

```ts
{
    command: Lime.Command,
    destination?: 'BlipService' | 'MessagingHubService',
    timeout?: number
}
```

JS Example:

```js
import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPContainer from '../constants/iframe-message-proxy-container';

const getConfigurationDataAsync = async () => {
    const { response } = await IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.SEND_COMMAND,
        content: {
            command: {
                method: IMPContainer.CommandMethods.GET,
                uri: '/configurations'
            }
        }
    });

    return response;
};
```

**`StartLoading`**

Start a loading screen on portal.

JS Example:

```js
import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPContainer from '../constants/iframe-message-proxy-container';

const startLoading = () =>
    IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.START_LOADING
    });
```

**`StopLoading`**

Stop the loading screen.

JS Example:

```js
import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPContainer from '../constants/iframe-message-proxy-container';

const startLoading = () =>
    IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.STOP_LOADING
    });
```

**`HeightChange`**

Change the iframe height.

```ts
height: number
```

JS Example:

```js
import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPContainer from '../constants/iframe-message-proxy-container';

const setHeight = (height) =>
    IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.HEIGHT_CHANGE,
        content: height
    });
```

**`ShowModal`**

Show a modal to user.

```ts
{
    title: string,
    body: HTMLString,
    confirm: string,
    cancel: string
}
```

JS Example:

```js
import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPContainer from '../constants/iframe-message-proxy-container';

const showModal = (title, body, confirm, cancel) =>
    IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.SHOW_MODAL,
        content: {
            title,
            body,
            confirm,
            cancel
        }
    });
```

**`HideNavbar`**

Hide the navbar.

JS Example:

```js
import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPContainer from '../constants/iframe-message-proxy-container';

const startLoading = () =>
    IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.HIDE_NAVBAR
    });
```

**`ShowNavbar`**

Shows the navbar.

JS Example:

```js
import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPContainer from '../constants/iframe-message-proxy-container';

const startLoading = () =>
    IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.SHOW_NAVBAR
    });
```

**`GetCurrentLanguage`**

Get the user current language.

JS Example:

```js
import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPContainer from '../constants/iframe-message-proxy-container';

const getCurrentLanguageAsync = async () => {
    const { response } = await IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.GET_CURRENT_LANGUAGE
    });

    return response;
};
```

**`Toast`**

Create a toast.

```ts
{
    type: 'info' | 'success' | 'warning' | 'danger' | 'refresh',
    message: string
}
```

JS Example:

```js
import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPContainer from '../constants/iframe-message-proxy-container';
import BlipPortalToastTypes from '../constants/blip-portal-toast-types';

const showToastAsync = async (toast) =>
    await IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.TOAST,
        content: toast
    });

await showToastAsync({
    type: BlipPortalToastTypes.SUCCESS,
    message: 'Loaded with success'
});
```

**`GetApplication`**

Get a application or the current application.

```ts
applicationId?: string
```

JS Example:

```js
import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPContainer from '../constants/iframe-message-proxy-container';

const getApplicationDataAsync = async (fullIdentity = null) => {
    const { response: application } = await IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.GET_APPLICATION,
        content: fullIdentity
    });
    return application;
};
```

**`HasPermissions`**

Check if user has some permission.

```ts
{
    permissionType: string,
    customArea?: string,
    customShortName?: string
}
```

JS Example:

```js
import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPContainer from '../constants/iframe-message-proxy-container';

const userHasPermissionAsync = async (
    permission = 'write',
    area = 'team'
) => {
    const { response } = await IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.HAS_PERMISSIONS,
        content: {
            permissionType: permission,
            customArea: area
        }
    });

    return response;
};
```

**`GetPermissionsObject`**

Get the entire permission object.

JS Example:

```js
import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPContainer from '../constants/iframe-message-proxy-container';

const getUserPermissionsAsync = async () => {
    const { response } = await IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.GET_PERMISSIONS_OBJECT
    });

    return response;
};
```

[blip]: https://blip.ai
[iframe-message]: https://github.com/takenet/iframe-message-proxy
[blip-toolkit]: https://www.npmjs.com/package/blip-toolkit

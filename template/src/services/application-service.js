import { IframeMessageProxy } from 'iframe-message-proxy';
import * as IMPActions from '../config/constants/iframe-message-proxy-actions';
import * as IMPContainer from '../config/constants/iframe-message-proxy-container';
import * as env from '../config/appsettings.json';

const CONFIGURATION_URL = `${env.blip.commands_url}/configuration`;
const CONTACTS_URL = `${env.blip.commands_url}/contacts`;
const THREADS_URL = `${env.blip.commands_url}/threads`;
const POST_TYPE = 'application/json';

const getApplicationData = async (full_identity = null) => {
    const { response: application } = await IframeMessageProxy.sendMessage({
        action: IMPActions.get_application,
        content: full_identity
    });
    return application;
};

const getConfigurationData = async () => {
    const { response } = await IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.send_command,
        content: {
            command: {
                method: IMPContainer.CommandMethods.GET,
                uri: CONFIGURATION_URL
            }
        }
    });

    return response;
};

const setConfigurationData = async (payload) => {
    const { response } = await IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.send_command,
        content: {
            command: {
                method: IMPContainer.CommandMethods.SET,
                uri: CONFIGURATION_URL,
                type: POST_TYPE,
                resource: payload
            }
        }
    });

    return response;
};

const getCurrentLanguage = async () => {
    const { response } = await IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.get_current_language
    });

    return response;
};

const getContacts = async () => {
    const {
        response: { items }
    } = await IframeMessageProxy.sendMessage({
        action: IMPActions.send_command,
        content: {
            destination: IMPContainer.Destinations.messaging_hub_service,
            command: {
                method: IMPContainer.CommandMethods.GET,
                uri: CONTACTS_URL
            }
        }
    });

    return items;
};

const getThreads = async () => {
    const {
        response: { items }
    } = await IframeMessageProxy.sendMessage({
        action: IMPActions.send_command,
        content: {
            destination: IMPContainer.Destinations.messaging_hub_service,
            command: {
                method: IMPContainer.CommandMethods.GET,
                uri: THREADS_URL
            }
        }
    });

    return items;
};

export {
    getApplicationData,
    getConfigurationData,
    setConfigurationData,
    getCurrentLanguage,
    getContacts,
    getThreads
};

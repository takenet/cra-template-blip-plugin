import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPContainer from '../constants/iframe-message-proxy-container';

const PERMISSION_TYPE = 'write';
const PERMISSION_AREA = 'team';

const ACCOUNT_URI = '/account';

const getLoggedUserAsync = async () => {
    const { response } = await IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.SEND_COMMAND,
        content: {
            command: {
                method: IMPContainer.CommandMethods.GET,
                uri: ACCOUNT_URI
            },
            destination: IMPContainer.Destinations.BLIP_SERVICE
        }
    });

    return response;
};

const userHasPermissionAsync = async (
    permission = PERMISSION_TYPE,
    area = PERMISSION_AREA
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

export { getLoggedUserAsync, userHasPermissionAsync };

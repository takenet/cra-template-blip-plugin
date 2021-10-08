import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPActions from '../constants/iframe-message-proxy-actions';
import settings from '../config';
import { getApplicationDataAsync } from './application-service';
import { toKebabCase } from '../utils/string';

const TRACK_METHOD = 'createTrack';

let BOT_IDENTIFIER = null;
let BOT_NAME = null;

const createTrackAsync = async (event, payload = {}, callback = () => {}) => {
    const trackEvent = toKebabCase(`${settings.segment.prefix}-${event}`);

    if (!BOT_IDENTIFIER) {
        const { shortName, name } = await getApplicationDataAsync();
        BOT_IDENTIFIER = shortName;
        BOT_NAME = name;
    }
    payload.botIdentifier = BOT_IDENTIFIER;
    payload.botName = BOT_NAME;

    await IframeMessageProxy.sendMessage({
        action: IMPActions.SEGMENT,
        content: {
            method: TRACK_METHOD,
            parameters: {
                trackEvent,
                payload
            }
        }
    });
    callback();
};

const track = (
    event = '',
    properties = {},
    options = {},
    callback = () => {}
) => {
    createTrackAsync(event, { ...properties, ...options }, callback);
};

const page = (name = '', properties = {}, options = {}, callback = () => {}) =>
    track(`page-${name}`, properties, options, callback);

export { track, page };

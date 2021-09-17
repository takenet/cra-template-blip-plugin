import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPActions from '../constants/iframe-message-proxy-actions';
import settings from '../config';
import { toKebabCase } from '../utils/string';

const TRACK_METHOD = 'createTrack';

const createTrackAsync = async (event, payload = {}, callback = () => {}) => {
    const trackEvent = toKebabCase(`${settings.segment.prefix}-${event}`);

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
    createTrackAsync(event, { properties, options }, callback);
};

const page = (name = '', properties = {}, options = {}, callback = () => {}) =>
    track(`page-${name}`, properties, options, callback);

export { track, page };

import settings from '../config';
import { toKebabCase } from '../utils/string';

const executeActionSafe = (actionName, ...params) => {
    if (
        !!settings.segment.key &&
        !!window.analytics &&
        !!window.analytics[actionName]
    ) {
        window.analytics[actionName](...params);
    }
};

// Will execute action with formated name as first parameter
const executeNamedAction = (
    actionName,
    eventName,
    eventParamPosition = 0,
    ...params
) => {
    const fixedEventName = `${settings.segment.prefix}-${toKebabCase(
        eventName
    )}`;
    params.splice(eventParamPosition, 0, fixedEventName);
    executeActionSafe(actionName, ...params);
};

const load = () => executeActionSafe('load', settings.segment.key);

const track = (
    event = '',
    properties = {},
    options = {},
    callback = () => {}
) => executeNamedAction('track', event, 0, properties, options, callback);

const page = (name = '', properties = {}, options = {}, callback = () => {}) =>
    track(`page-${name}`, properties, options, callback);

const trackForm = (form, event = '', properties = {}) =>
    executeNamedAction('trackForm', event, 1, form, properties);

const trackLink = (element, event = '', properties = {}) =>
    executeNamedAction('trackLink', event, 1, element, properties);

const identify = (
    userId = '',
    traits = {},
    options = {},
    callback = () => {}
) => executeActionSafe('identify', userId, traits, options, callback);

export { load, page, track, trackForm, trackLink, identify };

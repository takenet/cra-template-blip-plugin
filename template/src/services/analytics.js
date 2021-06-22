import settings from '../config';
import { toKebabCase } from '../utils/string';

const load = () => {
    if (!!settings.segment.key && !!window.analytics) {
        window.analytics.load(settings.segment.key);
    }
};

const page = (
    name = '',
    properties = {},
    options = {},
    callback = () => {}
) => {
    if (!!settings.segment.key && !!window.analytics) {
        const formated_name = toKebabCase(`page-${name}`);
        window.analytics.page(formated_name, properties, options, callback);
    }
};

const track = (
    event = '',
    properties = {},
    options = {},
    callback = () => {}
) => {
    if (!!settings.segment.key && !!window.analytics) {
        const formated_event = toKebabCase(
            `${settings.segment.prefix}-${event}`
        );
        window.analytics.track(formated_event, properties, options, callback);
    }
};

const trackForm = (form, event = '', properties = {}) => {
    if (!!settings.segment.key && !!window.analytics) {
        const formated_event = toKebabCase(
            `${settings.segment.prefix}-${event}`
        );
        window.analytics.trackForm(form, formated_event, properties);
    }
};

const trackLink = (element, event = '', properties = {}) => {
    if (!!settings.segment.key && !!window.analytics) {
        const formated_event = toKebabCase(
            `${settings.segment.prefix}-${event}`
        );
        window.analytics.trackLink(element, formated_event, properties);
    }
};

const identify = (
    user_id = '',
    traits = {},
    options = {},
    callback = () => {}
) => {
    if (!!settings.segment.key && !!window.analytics) {
        window.analytics.identify(user_id, traits, options, callback);
    }
};

export { load, page, track, trackForm, trackLink, identify };

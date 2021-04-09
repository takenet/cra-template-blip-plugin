import env from '../config';

const load = () => {
    if (!!env.segment_key) {
        window.analytics.load(env.segment_key);
    }
};

const page = (
    name = '',
    properties = {},
    options = {},
    callback = () => {}
) => {
    if (!!env.segment_key) {
        window.analytics.page(name, properties, options, callback);
    }
};

const track = (
    event = '',
    properties = {},
    options = {},
    callback = () => {}
) => {
    if (!!env.segment_key) {
        window.analytics.track(event, properties, options, callback);
    }
};

const trackForm = (form, event = '', properties = {}) => {
    if (!!env.segment_key) {
        window.analytics.trackForm(form, event, properties);
    }
};

const identify = (
    user_id = '',
    traits = {},
    options = {},
    callback = () => {}
) => {
    if (!!env.segment_key) {
        window.analytics.identify(user_id, traits, options, callback);
    }
};

export { load, page, track, trackForm, identify };

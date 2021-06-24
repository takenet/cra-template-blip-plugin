// locale configuration
// locale : English (United States) [en-us]
import common from './common';
import notifications from './notifications';

const locale = {
    en: {
        translations: {
            ...common,
            ...notifications
        }
    }
};

export { locale };

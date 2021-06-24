// locale configuration
// locale : Portuguese (Brazil) [pt-br]
import common from './common';
import notifications from './notifications';

const locale = {
    pt: {
        translations: {
            ...common,
            ...notifications
        }
    }
};

export { locale };

// locale configuration
// locale : Spanish [es]
import common from './common';
import notifications from './notifications';

const locale = {
    es: {
        translations: {
            ...common,
            ...notifications
        }
    }
};

export { locale };

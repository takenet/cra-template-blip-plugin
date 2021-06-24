import applicationMiddleware from './middleware/application';
import commonMiddleware from './middleware/common';
import userMiddleware from './middleware/user';

const combinedMiddlewares = [
    applicationMiddleware,
    commonMiddleware,
    userMiddleware
];

export default combinedMiddlewares;

import applicationMiddleware from './middleware/application';
import commonMiddleware from './middleware/common';

const combinedMiddlewares = [applicationMiddleware, commonMiddleware];

export default combinedMiddlewares;

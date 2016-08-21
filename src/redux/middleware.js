//import promiseMiddleware from 'redux-promise';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/loggerMiddleware';

// define store middlewares as an array
export default [
    //  promiseMiddleware,
    thunkMiddleware,
    promiseMiddleware(),
    loggerMiddleware
];

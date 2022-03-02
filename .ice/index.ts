import logger from './plugins/logger';
export * from './plugins/router';
import { config, APP_MODE } from './plugins/config';
import request from './plugins/request/request';
import useRequest from './plugins/request/useRequest';
import { Helmet } from 'react-helmet';
export * from './plugins/auth';

export {
  logger,
  config,
  APP_MODE,
  request,
  useRequest,
  Helmet as Head,
  // @deprecated
  Helmet,
};

export * from './core/routerAPI';
export * from './core/publicAPI';
export * from './core/runApp';

export { lazy } from './core/lazy';

export * from './types';

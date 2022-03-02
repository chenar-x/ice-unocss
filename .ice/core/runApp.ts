import { createElement } from 'react';
import {
  createBaseApp,
  initAppLifeCycles,
  emitLifeCycles,
  getSearchParams,
  initHistory,
  createHistory,
} from 'create-app-shared';
import reactAppRenderer, { RenderAppConfig } from 'react-app-renderer';

// eslint-disable-next-line
import '../../src/global.css';

import loadStaticModules from './loadStaticModules';
import loadRuntimeModules from './loadRuntimeModules';

import { setAppConfig } from './appConfig';
import ErrorBoundary from './ErrorBoundary';
import { IAppConfig, IBuildConfig } from '../types';

const buildConfig: IBuildConfig = { icestarkType: 'es' };
const frameworkAppBase = createBaseApp({
  loadRuntimeModules,
  createElement,
  runtimeAPI: {
    createHistory,

    getSearchParams,
  },
});

export function runApp(appConfig?: IAppConfig) {
  // store appConfig in case of server side render
  // server bundle will to get appConfig after run runApp
  setAppConfig(appConfig as IAppConfig);
  // load static modules before init runtime such as request
  loadStaticModules(appConfig as IAppConfig);
  if (process.env.__IS_SERVER__) return;

  // set History before GID
  initHistory && initHistory(appConfig as any);

  reactAppRenderer({
    appConfig: appConfig as RenderAppConfig,
    buildConfig,
    ErrorBoundary,
    appLifecycle: {
      createBaseApp: frameworkAppBase,
      initAppLifeCycles,
      emitLifeCycles,
    },
  });
}

export default {
  createBaseApp: frameworkAppBase,
  initAppLifeCycles,
};

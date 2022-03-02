import { IAppConfig } from '../types';

import module0 from '../plugins/request/pluginRuntime/runtime';

function loadStaticModules(appConfig: IAppConfig) {
  module0({ appConfig });
}

export default loadStaticModules;

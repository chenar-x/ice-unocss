import RuntimeModule from './runtimeModule';
import type { AppConfig, BuildConfig, Context } from './types';
declare const _default: ({ loadRuntimeModules, createElement, runtimeAPI, runtimeValue }: {
    loadRuntimeModules: any;
    createElement: any;
    runtimeAPI?: {};
    runtimeValue?: {};
}) => <T = AppConfig, P = BuildConfig, S = Context>(appConfig: T, buildConfig: P, context: S, staticConfig?: any) => {
    runtime: RuntimeModule;
    appConfig: T;
};
export default _default;

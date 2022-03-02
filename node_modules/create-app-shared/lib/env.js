import { isMiniApp, isWeChatMiniProgram, isByteDanceMicroApp, isWeb, isBaiduSmartProgram, isKuaiShouMiniProgram } from 'universal-env';
export var isMiniAppPlatform = (isMiniApp || isWeChatMiniProgram || isByteDanceMicroApp || isBaiduSmartProgram || isKuaiShouMiniProgram) && !isWeb;
export * from 'universal-env';
//# sourceMappingURL=env.js.map
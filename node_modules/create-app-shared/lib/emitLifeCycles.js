var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { getHistory } from './storage';
import router from './router';
import { LAUNCH, SHOW, HIDE } from './constants';
import { emit as appEmit } from './appLifeCycles';
import { emit as pageEmit } from './pageLifeCycles';
function emitLifeCycles() {
    // Get history
    var history = getHistory();
    var pathname = history && history.location ?
        history.location.pathname : typeof window !== 'undefined' && window.location.pathname;
    // Set current router
    router.current = {
        pathname: pathname,
        visibilityState: true
    };
    // Emit app lifecycle
    appEmit(LAUNCH);
    appEmit(SHOW);
    if (history && history.listen) {
        // Listen history change
        history.listen(function (location) {
            if (location.pathname !== router.current.pathname) {
                // Flow router info
                router.prev = __assign({}, router.current);
                router.current = {
                    pathname: location.pathname,
                    visibilityState: true
                };
                router.prev.visibiltyState = false;
                pageEmit(HIDE, router.prev.pathname);
                pageEmit(SHOW, router.current.pathname);
            }
        });
    }
}
export default emitLifeCycles;
//# sourceMappingURL=emitLifeCycles.js.map
import { SHARE } from './constants';
import { isFunction } from './utils';
export var appCycles = {};
/**
 * Emit life cycle callback
 * @param {string} cycle cycle name
 * @param {object} context callback's context when executed
 * @param  {...any} args callback params
 */
export function emit(cycle, context) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (Object.prototype.hasOwnProperty.call(appCycles, cycle)) {
        var cycles = appCycles[cycle];
        if (cycle === SHARE) {
            // In MiniApp, it need return callback result as share info, like { title, desc, path }
            args[0].content = context ? cycles[0].call(context, args[1]) : cycles[0](args[1]);
        }
        else {
            cycles.forEach(function (fn) {
                // eslint-disable-next-line
                context ? fn.apply(context, args) : fn.apply(void 0, args);
            });
        }
    }
}
/**
 * Add app lifecycle callback
 * @param {string} cycle cycle name
 * @param {function} callback cycle callback
 */
export function addAppLifeCycle(cycle, callback) {
    if (isFunction(callback)) {
        appCycles[cycle] = appCycles[cycle] || [];
        appCycles[cycle].push(callback);
    }
}
//# sourceMappingURL=appLifeCycles.js.map
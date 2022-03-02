interface AppCycles {
    [key: string]: Function[];
}
export declare const appCycles: AppCycles;
/**
 * Emit life cycle callback
 * @param {string} cycle cycle name
 * @param {object} context callback's context when executed
 * @param  {...any} args callback params
 */
export declare function emit(cycle: string, context?: object, ...args: any): void;
/**
 * Add app lifecycle callback
 * @param {string} cycle cycle name
 * @param {function} callback cycle callback
 */
export declare function addAppLifeCycle(cycle: string, callback: Function): void;
export {};

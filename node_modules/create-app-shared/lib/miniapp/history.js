import { createMiniAppHistory } from 'miniapp-history';
import createInitHistory from '../createInitHistory';
import { setHistory } from '../storage';
var createHistory = function (_a) {
    var routes = _a.routes;
    if (process.env.__IS_SERVER__) {
        // miniapp is not support ssr
        return null;
    }
    window.history = createMiniAppHistory(routes);
    window.location = window.history.location;
    setHistory(window.history);
    return window.history;
};
var initHistory = createInitHistory(createHistory);
export { initHistory };
export default createHistory;
//# sourceMappingURL=history.js.map
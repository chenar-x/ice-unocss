import { createMemoryHistory } from 'history';
import createInitHistory from '../createInitHistory';
import { setHistory } from '../storage';
var createHistory = function () {
    // Force memory history when env is weex or kraken
    var history = createMemoryHistory();
    setHistory(history);
    return history;
};
var initHistory = createInitHistory(createHistory);
export { initHistory };
export default createHistory;
//# sourceMappingURL=history.js.map
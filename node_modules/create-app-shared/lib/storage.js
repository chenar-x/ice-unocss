// eslint-disable-next-line import/no-mutable-exports
var history = null;
var storage = {
    history: null,
};
function getHistory() {
    return storage.history;
}
function setHistory(customHistory) {
    history = customHistory;
    storage.history = customHistory;
}
export { getHistory, setHistory, history, };
//# sourceMappingURL=storage.js.map
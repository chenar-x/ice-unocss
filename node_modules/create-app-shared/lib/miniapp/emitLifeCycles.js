import router from './router';
function emitLifeCycles() {
    router.current = {
        pathname: window.__pageId,
        visibilityState: true,
    };
}
export default emitLifeCycles;
//# sourceMappingURL=emitLifeCycles.js.map
var current = {
    pathname: '/',
    visibilityState: true
};
var router = {
    prev: null,
    current: current
};
Object.defineProperty(router, 'current', {
    get: function () {
        return current;
    },
    set: function (value) {
        Object.assign(current, value);
    }
});
export default router;
//# sourceMappingURL=router.js.map
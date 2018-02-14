export default new Proxy(localStorage, {
    get: function(target, property: string) {
        return JSON.parse(
            target[`app-${property}`] || 'null'
        ) || undefined;
    },
    set: function (target, property: string, value: any) {
        target[`app-${property}`] = JSON.stringify(value);
        return true
    },
    deleteProperty: function(target, property: string) {
        return delete target[`app-${property}`];
    },
})

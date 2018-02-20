import * as _ from 'lodash';

window._ = _;
const nestedObjectHandler = {
    get: function (target, property: string) {
        const value = target[property];

        if (_.isPlainObject(value)) {
            return new Proxy(value, nestedObjectHandler);
        }

        return value;
    },
    set: function (target, property: string, value: any) {

        return true;
    }
};

export default new Proxy(localStorage, {
    get: function(target, property: string) {
        const value = JSON.parse(
            target[`app-${property}`] || 'null'
        ) || undefined;

        if (_.isPlainObject(value)) {
            return new Proxy(value, nestedObjectHandler);
        }
        return value;
    },
    set: function (target, property: string, value: any) {
        target[`app-${property}`] = JSON.stringify(value);
        return true
    },
    deleteProperty: function(target, property: string) {
        return delete target[`app-${property}`];
    },
})

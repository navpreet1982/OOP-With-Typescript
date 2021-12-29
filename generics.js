"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.mergeClassicUser = function (params) {
        var _a = this, name = _a.name, isMale = _a.isMale, age = _a.age, string = _a.email;
        this.classicUserData = __assign({ name: name, isMale: isMale, age: age, email: string }, params);
    };
    return User;
}());
exports.User = User;
var user1 = new User();
user1.classicUserData({ name: { first: 'Navpreet', last: 'Singh' } });
console.log(user1.classicUserData.name.first);
var user2 = new User();
user2.classicUserData({ name: { first: 'Navpreet', middle: 'Singh', last: 'Saini' } });
console.log(user2.classicUserData.name.middle);

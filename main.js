"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
var user = /** @class */ (function () {
    function user(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    Object.defineProperty(user.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " | ").concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    user.prototype.checkCurrentEmail = function (email) {
        return this.email == email;
    };
    return user;
}());
exports.user = user;
var usr = new user('Navpreet', 'Singh', 'navpreet1982@gmail.com');
console.log(usr.fullName);
var res = usr.checkCurrentEmail('navpreet1982@gmail.com');
console.log(res);

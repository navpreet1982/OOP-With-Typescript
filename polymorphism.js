"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());
exports.User = User;
var BaseUser = /** @class */ (function (_super) {
    __extends(BaseUser, _super);
    function BaseUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseUser.prototype.hasAllAccess = function () {
        return this.role === 'Admin';
    };
    return BaseUser;
}(User));
var SuperAdmin = /** @class */ (function (_super) {
    __extends(SuperAdmin, _super);
    function SuperAdmin(firstName, lastName, email) {
        var _this = _super.call(this, firstName, lastName, email) || this;
        //overriding
        _this.role = 'Admin';
        return _this;
    }
    //override
    SuperAdmin.prototype.hasAllAccess = function () {
        return true;
    };
    return SuperAdmin;
}(BaseUser));

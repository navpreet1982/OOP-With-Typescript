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
exports.Cat = exports.Dog = exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(age, legs, name) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
    return Animal;
}());
exports.Animal = Animal;
///Child 1
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.woff = function () {
        return "WOFF!";
    };
    return Dog;
}(Animal));
exports.Dog = Dog;
var dog = new Dog(2, 4, 'Pony');
dog.age;
dog.woff();
///Child 2
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.meow = function () {
        return "MEOW";
    };
    return Cat;
}(Animal));
exports.Cat = Cat;
var cat = new Cat(12, 4, 'Kitty');
cat.age;
cat.meow();

// -------------------Basic 1-------------------
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
var array = [];
var Person = /** @class */ (function () {
    function Person(a, b, c, d) {
        this.fName = a;
        this.lName = b;
        this.age = c;
        this.jobTitle = d;
        console.table(this);
        array.push(this);
    }
    Person.prototype.showMessage = function () {
        return "<p>Hello there, my name is " + this.fName + " " + this.lName + " and I am " + this.age + " years old, and I am a " + this.jobTitle + ".</p>";
    };
    return Person;
}());
new Person("Mathias", "Fuchs", 34, "Full-Stack-Webdeveloper");
// ------------------Basic 2----------------------------
var Extra = /** @class */ (function (_super) {
    __extends(Extra, _super);
    function Extra(a, b, c, d, e, f) {
        var _this = _super.call(this, a, b, c, d) || this;
        _this.salary = e;
        _this.jobLocation = f;
        return _this;
    }
    Extra.prototype.showMessage = function () {
        return _super.prototype.showMessage.call(this) + " My salary is \u20AC " + this.salary + " and I work at " + this.jobLocation + ".";
    };
    return Extra;
}(Person));
new Extra("Mathias", "Fuchs", 34, "Full-Stack-Webdeveloper", 2000, "My Design");
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var val = array_1[_i];
    document.getElementById("entry").innerHTML += val.showMessage();
}

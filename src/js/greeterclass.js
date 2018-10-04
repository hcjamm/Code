var GreeterClass = /** @class */ (function () {
    function GreeterClass() {
        this.greeting = "Hello, How are you? ";
    }
    GreeterClass.prototype.greet = function (message) {
        return this.greeting + message;
    };
    return GreeterClass;
}());
var greeterobj = new GreeterClass();
document.body.innerHTML += greeterobj.greet("world!");
document.body.innerHTML += greeterobj.greet("world!");
document.body.innerHTML += greeterobj.greet("world!");
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color[1];
var d = Color.Green.toString().substr(0, 1);
console.log(c + d);

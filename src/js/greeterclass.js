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

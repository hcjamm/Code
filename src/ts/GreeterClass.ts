
class GreeterClass {
    constructor() {

    }
    private readonly greeting = "Hello, How are you? ";

    greet(message) {
        return this.greeting + message;
    }
}

let greeterobj = new GreeterClass();
document.body.innerHTML += greeterobj.greet("world!");
document.body.innerHTML += greeterobj.greet("world!");
document.body.innerHTML += greeterobj.greet("world!");


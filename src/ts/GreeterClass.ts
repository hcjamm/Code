
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

enum Color { Red, Green, Blue };
let c: string = Color[1];
let d: string = Color.Green.toString().substr(0, 1);
console.log(c + d);
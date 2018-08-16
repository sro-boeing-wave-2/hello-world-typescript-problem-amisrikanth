"use strict";
exports.__esModule = true;
function displayHelloWorld() {
    document.getElementById('helloWorldBlock').innerHTML = 'Hello World';
}
document.getElementById('sayHelloBtn').addEventListener('click', displayHelloWorld);

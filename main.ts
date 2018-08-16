export {}
function displayHelloWorld(){
 document.getElementById('helloWorldBlock').innerHTML= 'Hello World';
    }
    document.getElementById('sayHelloBtn').addEventListener('click', displayHelloWorld);
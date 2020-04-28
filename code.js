// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof input === "undefined") {
        return "Hello, World!";
    } else if(typeof input === "boolean") {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(x){
    return x == 5;
}

function isEven(x) {
    if (typeof x == 'boolean') {
        return false;
    } else {
        return (x % 2 === 0);

    }
}

function isVowel(input){
    return input == 'A' || input == "E" || input == 'I' || input == 'O' || input == 'U'|| input == 'a' || input == 'e' || input == 'i' || input == 'o' || input == 'u';

}

function add(num1, num2){
    return (parseFloat(num1 )+ parseFloat(num2));

}
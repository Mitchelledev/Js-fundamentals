let a = 10;
let b = 5;

function add(a, b){
    return a + b;
}
console.log(add(a,b))

function subtract(a, b){
    return a - b;
}
console.log(subtract(a, b))

function multiply(a, b){
    return a * b;
}
console.log(multiply(a, b))

function divide(a, b){
    return a / b;
}
console.log(divide(a,b))

function calculate(a, operator, b){
     if(operator === "+"){
        return add(a,b);
     }
     else if(operator === "-"){
        return subtract(a,b);
     }
     else if(operator === "*"){
        return multiply(a,b);
     }
     else if(operator === "/"){
        return divide(a,b); 
     }

}






















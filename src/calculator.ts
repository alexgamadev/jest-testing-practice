type CalculatorFunction = (num1 : number, num2 : number) => number;

interface Calculator {
    add : CalculatorFunction,
    subtract: CalculatorFunction,
    divide: CalculatorFunction,
    multiply: CalculatorFunction,
}

function add(num1 : number, num2 : number) {
    return num1 + num2;
}

function subtract(num1 : number, num2 : number) {
    return num1 - num2;
}

function multiply(num1 : number, num2 : number) {
    return num1 * num2;
}

function divide(num1 : number, num2 : number) {
    return num2 !== 0 ? num1 / num2 : NaN;
}


const calculator : Calculator = {
    add,
    subtract,
    multiply,
    divide,
}

export default calculator;
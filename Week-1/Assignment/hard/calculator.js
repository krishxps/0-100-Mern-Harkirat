class Calculator {
    constructor() {
        this.result = 0;
    }

    add(number) {
        this.result += number;
    }

    subtract(number) {
        this.result -= number;
    }

    multiply(number) {
        this.result *= number;
    }

    divide(number) {
        if (number === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= number;
    }

    clear() {
        this.result = 0;
    }

    getResult() {
        return this.result;
    }

    calculate(expression) {
        const parsedExpression = expression.replace(/\s+/g, '').split(/([+\-*/()])/).filter(Boolean);

        const stack = [];
        for (let token of parsedExpression) {

            if (['+', '-', '*', '/'].includes(token)) {
                const operand2 = stack.pop();
                const operand1 = stack.pop();
                if (operand1 === undefined || operand2 === undefined) {
                    throw new Error("Invalid expression: Insufficient operands");
                }
                switch (token) {
                    case '+':
                        stack.push(operand1 + operand2);
                        break;
                    case '-':
                        stack.push(operand1 - operand2);
                        break;
                    case '*':
                        stack.push(operand1 * operand2);
                        break;
                    case '/':
                        if (operand2 === 0) {
                            throw new Error("Invalid expression: Division by zero");
                        }
                        stack.push(operand1 / operand2);
                        break;
                }
            } else {
                const number = parseFloat(token);
                if (isNaN(number)) {
                    throw new Error("Invalid expression: Non-numerical characters detected");
                }
                stack.push(number);
            }
        }
        if (stack.length !== 1) {
            throw new Error("Invalid expression: Unable to evaluate");
        }
        this.result = stack[0];
    }
}

module.exports = Calculator;

let display= document.getElementById('output');
let input = '';
let currentOperation = '';
let num1 = null;
let resultDisplayed = false; 


document.querySelectorAll('.num').forEach(button => {
    button.addEventListener('click', () => {

        let value = button.dataset.number;
        if (value === 'C') {
            clear();
        } else if (value === '=') {
           calculations();
        } else if (['+', '-', 'x', '/'].includes(value)) {
            setOperation(value);
        } else {
            appendNumber(value);
        }
    });
});

function clear() {
    display.value = ''; 
    input = '';  
    currentOperation = '';  
    firstOperand = null;  
    resultDisplayed = false;  
}


function appendNumber(num) {
    if (resultDisplayed) {
       
        input = '';
        resultDisplayed = false;
    }
    input += num;
    display.value = input;  
}

function setOperation(operation) {
    if (input === '' && num1 === null) return;  

    if (num1 === null) {
        num1 = parseFloat(input);
    } else if (input !== '') {
       
       calculations();
        num1 = parseFloat(display.value);  
    }

    currentOperation = operation === 'x' ? '*' : operation;  
    input = '';  
    display.value = num1  + operation + ' ';  
    resultDisplayed = false;  
}

function calculations() {
    if (input === '' && currentOperation === '') return;  
    let num2 = parseFloat(input);
    let result;

    switch (currentOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero!");
                clear();
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    display.value = result;  
    input = result.toString();  
    firstOperand = result;  
    currentOperation = '';  
    resultDisplayed = true;  
}


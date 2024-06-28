let actualExpression = ''; // Actual expression for evaluation
let displayExpression = '0'; // Display expression for showing on the display

function appendToDisplay(value) {
    let display = document.getElementById('display');

    // Handle input values
    if (value === '*') {
        // If input is '*', append 'x' to the display and '*' to the actual expression
        displayExpression += 'x';
        actualExpression += '*';
    } else if (value === '/') {
        // If input is '/', append '÷' to the display and '/' to the actual expression
        displayExpression += '÷';
        actualExpression += '/';
    } else if (value === '.') {
        // If input is '.', append it only if there isn't already a dot in the display
        if (!displayExpression.includes('.')) {
            displayExpression += value;
            actualExpression += value;
        }
    } else {
        // If input is a number or an operator, handle leading zero and append the value
        if (displayExpression === '0' && value !== '.') {
            displayExpression = value;
            actualExpression = value;
        } else {
            displayExpression += value;
            actualExpression += value;
        }
    }

    // Update the display
    display.value = displayExpression;
}


function clearDisplay() {
    document.getElementById('display').value = '0';
    actualExpression = '';
    displayExpression = '0';
}

function backspace() {
    let display = document.getElementById('display');
    // Update both expressions
    if (displayExpression.length > 1) {
        displayExpression = displayExpression.slice(0, -1);
        actualExpression = actualExpression.slice(0, -1);
    } else {
        displayExpression = '0';
        actualExpression = '';
    }
    display.value = displayExpression;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        const result = eval(actualExpression); // Evaluate the actual expression
        display.value = result;
        actualExpression = result.toString();
        displayExpression = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}

function handleKeyPress(event) {
    const key = event.key;
    if (/[0-9\.\+\-\*\/]/.test(key)) {
        event.preventDefault();
        appendToDisplay(key);
    } else if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        event.preventDefault();
        backspace();
    }
}

const defaultResult = 3

let currentResult = defaultResult;
let logEntries = [];

currentResult = (currentResult + 10) * 3 / 2 - 1;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`

    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operatorItentifier,
    prevResult,
    operatorNumber,
    newResult
) {
    const logEntry = {
        operator: operatorItentifier,
        prevResult: prevResult,
        number: operatorNumber,
        result: newResult
    }
    logEntries.push(logEntry)
    console.log(logEntries)
}

function calculate(operation) {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    if (operation === 'ADD') {
        currentResult = currentResult + enteredNumber;
        operator = '+'       
    } else if (operation === 'SUBTRACT') {
        currentResult = currentResult - enteredNumber;
        operator = '-'
    } else if (operation === 'DIVIDE') {
        currentResult = currentResult / enteredNumber;
        operator = '/'
    } else if (operation === 'MULTIPLY') {
        currentResult = currentResult * enteredNumber;
        operator = '*'
    }
    createAndWriteOutput(operator, initialResult, enteredNumber)
    writeToLog(operation, initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'))
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
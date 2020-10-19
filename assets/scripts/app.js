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

function add() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber)
    writeToLog('ADD', initialResult, enteredNumber, currentResult)

}

function subtract() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber)
    writeToLog('SUBTRUCT', initialResult, enteredNumber, currentResult)
}

function divide() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber)
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

function multiply() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber)
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide)
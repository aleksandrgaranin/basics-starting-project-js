const defaultResult = 3

let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function add() {
    const enteredNumber = getUserNumberInput()
    const calcDescription = `${currentResult} + ${enteredNumber}`
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);

class Calculator {
    constructor(prevOperandTextElement, currOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement
        this.currOperandTextElement = currOperandTextElement
    }

    clear() {

    }

    delete() {

    }

    appendNumber(number) {

    }

    chooseOperation(operation){ 

    }

    compute() {
        
    }
}


const numberButton = document.querySelectorAll('[data-number]')
/*selects all attributes which contain data-number*/
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const prevOperandTextElement = document.querySelector('[data-prev-operand]')
const currOperandTextElement = document.querySelector('[data-curr-operand]')


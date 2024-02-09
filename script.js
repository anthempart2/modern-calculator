class Calculator {
    constructor(prevOperandTextElement, currOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement
        this.currOperandTextElement = currOperandTextElement
        this.clear()
    }

    clear() {
        this.currOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        if (number == '.' && this.currOperand.includes('.')) return
        this.currOperand = this.currOperand.toString() + number.toString()
        /*we want our nos to be appended and not added*/
    }

    chooseOperation(operation) {
        if (this.currOperand === '') return
        if (this.prevOperand !=== '') {
            this.compute()
        }
        this.operation = operation
        this.prevOperand = this.currOperand
        this.currOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.prevOperand)
        const curr = parseFloat(this.currOperand)
        if (isNaN(prev) || isNan(this.curr)) return

        switch (this.operation) {
            case '+':
                computation = prev + curr
                break
            case '-':
                computation = prev - curr
                break
            case '*':
                computation = prev * curr
                break
            case '/':
                computation = prev / curr
                break
        }
    }

    updateDisplay() {
        this.currOperandTextElement.innerText = this.currOperand
        this.prevOperandTextElement.innerText = this.prevOperand
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


const calculator = new Calculator(prevOperandTextElement, currOperandTextElement)

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        button.updateDisplay()
    })
})

operationrButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        button.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})



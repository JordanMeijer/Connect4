let number = 0
const WINNING_COMBINATIONS = [
]



let redTurn
const Red_Class = "red"
const Yellow_Class = "yellow"

const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text')
const restartButton = document.getElementById('restartButton')

startGame()
horizontalPushWinComb(number)
verticalPushWinComb(number)
SEdiagonalPushWinComb(number)
SWdiagonalPushWinComb(number)

restartButton.addEventListener('click' , startGame)

function startGame() {
    console.log("startgame!")
    redTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(Yellow_Class)
        cell.classList.remove(Red_Class)
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}


function handleClick(e) {
    const cell = e.target
    const currentClass = redTurn ? Red_Class : Yellow_Class
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else 
    {
        SwapTurns()
        setBoardHoverClass()
    }
}

 
function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!'
    } else {
        winningMessageTextElement.innerText = `${redTurn ? "Red" : "Yellow"} Wins!`
    }
    winningMessageElement.classList.add('show')
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(Red_Class) || cell.classList.contains(Yellow_Class)
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function SwapTurns() {
    redTurn = !redTurn
}

function setBoardHoverClass() {


    board.classList.remove(Red_Class)
    board.classList.remove(Yellow_Class)
    if (redTurn) {
        board.classList.add(Red_Class)
    } else {
        board.classList.add(Yellow_Class)
    }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}



function horizontalPushWinComb(number) {
    while (number < 39) {
        if (number % 7 !== 4 && number % 7 !== 5 && number % 7 !== 6) {
            console.log(number)
            let NewCombination = [number, number + 1, number + 2, number + 3]
            console.log(NewCombination)
            WINNING_COMBINATIONS.push(NewCombination)
        } number ++
    } number = 0
}

function verticalPushWinComb(number) {
    while (number < 21) {
         console.log(number)
        let NewCombination = [number, number + 7, number + 14, number + 21]
        console.log(NewCombination)
        WINNING_COMBINATIONS.push(NewCombination)
        number ++
    } number = 0
}

function SEdiagonalPushWinComb(number) {
    while (number < 18) {
        if (number % 7 !== 4 && number % 7 !== 5 && number % 7 !== 6) {
            let NewCombination = [number, number + 8, number + 16, number + 24]
            WINNING_COMBINATIONS.push(NewCombination)
        }number ++
    } number = 0
}

function SWdiagonalPushWinComb(number) {
    while (number < 21) {
        if (number % 7 !== 0 && number % 7 !== 1 && number % 7 !== 2) {
            let NewCombination = [number, number + 6, number + 12, number + 18]
            WINNING_COMBINATIONS.push(NewCombination)
        }number ++
    } number = 0
}
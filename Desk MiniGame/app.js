const board = document.querySelector('#board')
const SQUARES_NUMBER = 600
const colors = ['#e74c3c', '#80cbc4', '#42a5f5', '#ff4081', '#e91e63', '#8e44ad', '#7e57c2', '#3498db', '#e67e22', '#2ecc71', '#80deea'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}


function setColor(element) {
    const color = getRandColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandColor() {
    const index  = Math.floor(Math.random() * colors.length)
    return colors[index]
}
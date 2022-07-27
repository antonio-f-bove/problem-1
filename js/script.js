const NUMBER_OF_CELLS = 25

// TODO non ho capito perché ho avuto bisogno di specificare di aspettare l'onload
window.addEventListener('load', () => {
  fillGrid(NUMBER_OF_CELLS)
  assignCellsRandomColour()
})


function fillGrid(numberOfCells) {
  const grid = document.querySelector('#third-col .grid')

  for (let i = 0; i < numberOfCells; i++) {
    const cell = makeNewCell()
    grid.appendChild(cell)
  }
}

function makeNewCell() {
  const cell = document.createElement('div')
  cell.className = 'cell'

  return cell
}

function assignCellsRandomColour() {
  const cells = document.querySelectorAll('.cell')
  cells.forEach(cell => {
    cell.style.backgroundColor = getRandomHexColour()
  })
}

function getRandomHexColour() {
  let hexColour = '#'
  for (let i = 0; i < 6; i++) {
    hexColour += getRandomHexCharacter()
  }

  return hexColour
}

function getRandomHexCharacter() {
  const charPool = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  return charPool[Math.floor(Math.random() * 16)]
}
const NUMBER_OF_CELLS_IN_THIRD_COL = 25
const NUMBER_OF_CELLS_IN_MINI_GRID = 4

// TODO non ho capito perché ho avuto bisogno di specificare di aspettare l'onload
window.addEventListener('load', () => {
  const grid = document.querySelector('#third-col .grid')
  fillGrid(grid, NUMBER_OF_CELLS_IN_THIRD_COL)

  const cells = document.querySelectorAll('.cell')
  cells.forEach(cell => {
    assignCellRandomColour(cell)

    cell.addEventListener('click', (e) => {
      const miniGrid = document.createElement('div')
      miniGrid.className = 'grid-4x4'
      fillGrid(miniGrid, NUMBER_OF_CELLS_IN_MINI_GRID)

      const newCells = miniGrid.children      
      for (let i = 0; i < newCells.length; i++) {
        assignCellRandomColour(newCells[i])
      }
      
      e.target.append(miniGrid)
      console.log(e.target)
    })
  })
})


function fillGrid(grid, numberOfCells) {
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

function assignCellRandomColour(cell) {
  cell.style.backgroundColor = getRandomHexColour()

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
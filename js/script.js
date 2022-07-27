const NUMBER_OF_CELLS = 25

// TODO non ho capito perché ho avuto bisogno di specificare di aspettare l'onload
window.addEventListener('load', () => {
  const grid = document.querySelector('.grid')
  fillGrid(grid, NUMBER_OF_CELLS)
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
